import supabase from "../../api/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "PUT")
    return res.status(405).json({ error: "Method not allowed" });

  const { id_service, electronic, schedule, note, status } = req.body;

  const { data, error } = await supabase
    .from("services")
    .update({ electronic, schedule, note, status })
    .eq("id_service", id_service)
    .select();

  if (error) return res.status(400).json({ error });

  res.status(200).json({ message: "Service updated", service: data[0] });
}
