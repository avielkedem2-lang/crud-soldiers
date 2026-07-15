export const checkBody = (req, res, next) =>{
    const body = req.body
    if (!body || Object.keys(body).length < 4) return res.status(404).end("Bod request")
    next()
}