export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  console.log("📩 New email:", email);

  // For now, we just send OK — later we’ll connect Mailchimp
  return res.status(200).json({ message: "Email saved (temporary)" });
}
