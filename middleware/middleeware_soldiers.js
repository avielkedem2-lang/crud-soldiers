export const checkBody = (req, res, next) =>{
    const body = req.body
    if (!body || Object.keys(body).length < 4) return res.status(400).end("Bad request")
    next()
}


export const checkQuery= (req, res, next) => {
    if (Object.keys(req.query).length === 0) return next()
    const unit = req.query.unit
    const soldier_rank = req.query.soldier_rank
    const status = req.query.status
    if (unit) return next()
    if(soldier_rank) return next()
    if (status) return next()
    return res.status(400).end("Bad request")
}



export const checkParams = (req, res, next) => {
    const id = req.params.id
    if (!id || isNaN(id)) return res.status(400).end("Bad request")
    next()
}