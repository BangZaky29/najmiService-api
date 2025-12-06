import supabase from "../../api/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "DELETE")
    return res.status(405).json({ error: "Method not allowed" });

  const { id_service } = req.body;

  const { error } = await supabase
    .from("services")
    .delete()
    .eq("id_service", id_service);

  if (error) return res.status(400).json({ error });

  res.status(200).json({ message: "Service deleted" });
}
