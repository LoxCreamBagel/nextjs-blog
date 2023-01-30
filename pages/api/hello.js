
const handler = (req, res) => {
    const name = req.query?.name ?? '';
    res.status(200).json({ text: `Hello, ${name}` });
};

export default handler;