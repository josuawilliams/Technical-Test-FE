

export function SummaryData() {
    return (dispatch) => {
        return fetch("http://localhost:3000/Summary", {
            method: "GET"
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("error fetch")
                }
                return res.json()
            })
    }
}

export function UpdateSummaryData(data, dataitems, dataBuyer) {
    let result = data.length //total transaction
    let bestSellingItem = "" //best selling item
    let bestSellingCategory = "" //best selling category
    let bestSpenders = [] //best spenders

    let price = {
        squarehat: [],
        ovalhat: [],
        magicshirt: [],
    }
    let rpc = []
    let total = {
        squarehat: 0,
        ovalhat: 0,
        magicshirt: 0,
    }

    let forbestspender = {
        name : "",
        type : "",
        spent :0
    }
    let valueHats = 0
    let tops = 0
    let short = 0

    let squarehat = data.filter(el => {
        if (el.item === "square hat") {
            total.squarehat = total.squarehat + el.qty
        }
        if (el.item === "oval hat") {
            total.ovalhat = total.ovalhat + el.qty
        }
        if (el.item === "magic shirt") {
            total.magicshirt = total.magicshirt + el.qty
        }
    })
    const valueMax = Math.max(total.squarehat, total.ovalhat, total.magicshirt)

    if (valueMax === total.squarehat) {
        bestSellingItem = "square hat"
    }
    else if (valueMax === total.ovalhat) {
        bestSellingItem = "oval hat"
    }
    else if (valueMax === total.magicshirt) {
        bestSellingItem = "magic shirt"
    }

    let databestSellingCategory = dataitems.filter(el => {
        if (el.name === bestSellingItem) {
            bestSellingCategory = el.type
        }
    })

    dataitems.filter(el => {
        if (el.name === 'square hat') {
            el.prices.map(element => {
                price.squarehat.push(element)
            })
        }
        if (el.name === 'oval hat') {
            el.prices.map(element => {
                price.ovalhat.push(element)
            })
        }
        if (el.name === 'magic shirt') {
            el.prices.map(element => {
                price.magicshirt.push(element)
            })
        }
    })
    dataBuyer.filter(el => {
        if (el.type === "VIP") {
            data.filter(element => {
                if (element.buyer === el.name) {
                    if (element.item === "square hat") {
                        price.squarehat.filter(e => {
                            if (e.priceFor === el.type) {
                                bestSpenders.push({
                                    name: el.name,
                                    type: el.type,
                                    spent: element.qty*e.price
                                })
                                valueHats += e.price * element.qty
                            }
                        })
                    }
                }
            })
        }
        if (el.type === "regular") {
            data.filter(element => {
                if (element.buyer === el.name) {
                    if (element.item === "square hat") {
                        price.squarehat.filter(e => {
                            if (e.priceFor === el.type) {
                                bestSpenders.push({
                                    name: el.name,
                                    type: el.type,
                                    spent: element.qty*e.price
                                })
                                valueHats += e.price * element.qty
                            }
                        })
                    }
                }
            })
        }
        if (el.type === "wholesale") {
            data.filter(element => {
                if (element.buyer === el.name) {
                    if (element.item === "square hat") {
                        price.squarehat.filter(e => {
                            if (e.priceFor === el.type) {
                                bestSpenders.push({
                                    name: el.name,
                                    type: el.type,
                                    spent: element.qty*e.price
                                })
                                valueHats += e.price * element.qty
                            }
                        })
                    }
                }
            })
        }


        if (el.type === "regular") {
            data.filter(element => {
                if (element.buyer === el.name) {
                    if (element.item === "oval hat") {
                        price.ovalhat.filter(e => {
                            if (e.priceFor === el.type) {
                                bestSpenders.push({
                                    name: el.name,
                                    type: el.type,
                                    spent: element.qty*e.price
                                })
                                valueHats += e.price * element.qty
                            }
                        })
                    }
                }
            })
        }
        if (el.type === "VIP") {
            data.filter(element => {
                if (element.buyer === el.name) {
                    if (element.item === "oval hat") {
                        price.ovalhat.filter(e => {
                            if (e.priceFor === el.type) {
                                bestSpenders.push({
                                    name: el.name,
                                    type: el.type,
                                    spent: element.qty*e.price
                                })
                                valueHats += e.price * element.qty
                            }
                        })
                    }
                }
            })
        }
        if (el.type === "wholesale") {
            data.filter(element => {
                if (element.buyer === el.name) {
                    if (element.item === "oval hat") {
                        price.ovalhat.filter(e => {
                            if (e.priceFor === el.type) {
                                bestSpenders.push({
                                    name: el.name,
                                    type: el.type,
                                    spent: element.qty*e.price
                                })
                                valueHats += e.price * element.qty
                            }
                        })
                    }
                }
            })
        }


        if (el.type === "wholesale") {
            data.filter(element => {
                if (element.buyer === el.name) {
                    if (element.item === "magic shirt") {
                        price.magicshirt.filter(e => {
                            if (e.priceFor === el.type) {
                                bestSpenders.push({
                                    name: el.name,
                                    type: el.type,
                                    spent: element.qty*e.price
                                })
                                tops += e.price * element.qty
                            }
                        })
                    }
                }
            })
        }
        if (el.type === "VIP") {
            data.filter(element => {
                if (element.buyer === el.name) {
                    if (element.item === "magic shirt") {
                        price.magicshirt.filter(e => {
                            if (e.priceFor === el.type) {
                                bestSpenders.push({
                                    name: el.name,
                                    type: el.type,
                                    spent: element.qty*e.price
                                })
                                tops += e.price * element.qty
                            }
                        })
                    }
                }
            })
        }
        if (el.type === "regular") {
            data.filter(element => {
                if (element.buyer === el.name) {
                    if (element.item === "magic shirt") {
                        price.magicshirt.filter(e => {
                            if (e.priceFor === el.type) {
                                bestSpenders.push({
                                    name: el.name,
                                    type: el.type,
                                    spent: element.qty*e.price
                                })
                                tops += e.price * element.qty
                            }
                        })
                    }
                }
            })
        }

    });
    let revenue = valueHats + tops + short

    rpc.push({ category: "hats", revenue: valueHats })
    rpc.push({ category: "tops", revenue: tops })
    rpc.push({ category: "shorts", revenue: short })

    return (dispatch) => {
        return fetch("http://localhost:3000/Summary", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "totalTransaction": result,
                    "bestSellingItem": bestSellingItem,
                    "bestSellingCategory": bestSellingCategory,
                    "rpc": rpc,
                    "revenue": revenue,
                    "bestSpenders": bestSpenders
                }
            )
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("error fetch")
                }
                return res.json()
            })
    }
}