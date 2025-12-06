import supabase from "../supabaseClient";

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: "Method not allowed" });

  const { user_name, password, address } = req.body;

  if (!user_name || !password)
    return res.status(400).json({ error: "username & password required" });

  const { data, error } = await supabase
    .from("userLogin")
    .insert([{ user_name, password, address }])
    .select();

  if (error) return res.status(400).json({ error });

  res.status(201).json({ message: "User registered", user: data[0] });
}
