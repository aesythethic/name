import type { NextApiRequest, NextApiResponse } from "next"
import { sendSMS } from "../../lib/sms"

type LevyNotificationResponse = {
  success: boolean
  message?: string
  notificationsSent?: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<LevyNotificationResponse>) {
  // This would typically be triggered by a webhook from your payment processor
  // or run on a schedule, but for demonstration it's shown as an API endpoint

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    })
  }

  // Verify API key for security
  const apiKey = req.headers["x-api-key"]
  if (apiKey !== process.env.INTERNAL_API_KEY) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    })
  }

  try {
    // Get the quarter and year from the request, or use current quarter
    const { quarter, year } = req.body || {}
    const currentDate = new Date()
    const currentQuarter = Math.floor(currentDate.getMonth() / 3) + 1
    const currentYear = currentDate.getFullYear()

    const notificationQuarter = quarter || currentQuarter
    const notificationYear = year || currentYear

    // Get all units that need to be notified
    const units = await getUnitsForLevyNotification(notificationQuarter, notificationYear)

    // Calculate the due date (typically 30 days from now)
    const dueDate = new Date()
    dueDate.setDate(dueDate.getDate() + 30)
    const formattedDueDate = dueDate.toLocaleDateString("en-AU")

    // Send notifications to each unit
    let successCount = 0

    for (const unit of units) {
      try {
        // Send SMS notification
        await sendSMS({
          to: unit.ownerPhone,
          message: `STRATA NOTICE: Your quarterly levy payment of $${unit.levyAmount} for Q${notificationQuarter}/${notificationYear} is due on ${formattedDueDate}. Please log in to the owners portal to make payment.`,
        })

        // Log the notification
        await logNotification({
          unitNumber: unit.unitNumber,
          type: "LEVY_REMINDER",
          sentAt: new Date().toISOString(),
          details: {
            amount: unit.levyAmount,
            dueDate: formattedDueDate,
            quarter: notificationQuarter,
            year: notificationYear,
          },
        })

        successCount++
      } catch (unitError) {
        console.error(`Failed to notify unit ${unit.unitNumber}:`, unitError)
      }
    }

    return res.status(200).json({
      success: true,
      message: `Successfully sent ${successCount} levy notifications`,
      notificationsSent: successCount,
    })
  } catch (error) {
    console.error("Error sending levy notifications:", error)
    return res.status(500).json({
      success: false,
      message: "Failed to send notifications",
    })
  }
}

// Helper functions (would be implemented in separate files in a real application)
async function getUnitsForLevyNotification(quarter: number, year: number) {
  // In a real implementation, this would fetch data from your database
  // For this example, we'll return mock data
  console.log(`Fetching units for levy notification Q${quarter}/${year}`)

  return [
    { unitNumber: "101", ownerPhone: "+61412345678", levyAmount: 850 },
    { unitNumber: "102", ownerPhone: "+61423456789", levyAmount: 950 },
    { unitNumber: "103", ownerPhone: "+61434567890", levyAmount: 750 },
    // More units would be here in a real implementation
  ]
}

async function logNotification(data: any) {
  // Log the notification in your database
  console.log("Notification logged:", data)
}
