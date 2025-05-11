import type { NextApiRequest, NextApiResponse } from "next"
import { sendEmail } from "../../lib/email"

type MaintenanceRequest = {
  name: string
  unit: string
  description: string
  urgency: string
  contactNumber: string
  email: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { name, unit, description, urgency, contactNumber, email } = req.body as MaintenanceRequest

    // Validate the request data
    if (!name || !unit || !description || !urgency || !contactNumber) {
      return res.status(400).json({ message: "Missing required fields" })
    }

    // Send email notification to building manager
    await sendEmail({
      to: process.env.MANAGER_EMAIL || "manager@horizonstrata.com", // Fallback for demo
      subject: `Maintenance Request - Unit ${unit} - ${urgency}`,
      text: `
        New maintenance request:
        Unit: ${unit}
        Resident: ${name}
        Contact: ${contactNumber}
        Email: ${email}
        Urgency: ${urgency}
        Description: ${description}
      `,
    })

    // In a real implementation, you would store this in a database
    console.log("Maintenance request received:", {
      name,
      unit,
      description,
      urgency,
      contactNumber,
      email,
      timestamp: new Date().toISOString(),
    })

    return res.status(200).json({
      success: true,
      message: "Maintenance request submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting maintenance request:", error)
    return res.status(500).json({
      success: false,
      message: "Error submitting request, please try again",
    })
  }
}
