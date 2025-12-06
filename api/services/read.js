import supabase from "../../api/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });

  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("timestamp", { ascending: false });

  if (error) return res.status(400).json({ error });

  res.status(200).json(data);
}
