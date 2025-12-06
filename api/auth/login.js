import supabase from "../supabaseClient";

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: "Method not allowed" });

  const { user_name, password } = req.body;

  const { data, error } = await supabase
    .from("userLogin")
    .select("*")
    .eq("user_name", user_name)
    .eq("password", password)
    .single();

  if (error || !data)
    return res.status(401).json({ error: "Invalid username or password" });

  res.status(200).json({ message: "Login success", user: data });
}
