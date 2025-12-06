import supabase from "../../api/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { id_user, electronic, schedule, note, status } = req.body;

  const { data, error } = await supabase
    .from("services")
    .insert([{ id_user, electronic, schedule, note, status }])
    .select();

  if (error) return res.status(400).json({ error });

  res.status(201).json({ message: "Service created", service: data[0] });
}
