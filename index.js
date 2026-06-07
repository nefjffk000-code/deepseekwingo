export default async function handler(req, res) {
  try {
    const response = await fetch('https://draw.ar-lottery01.com/WinGo/WinGo/GetHistorys');
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
