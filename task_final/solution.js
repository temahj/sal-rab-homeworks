function sendRequest(name, phone, address, goods, sum) {
    let data = {client: {}, order: {}, goods: []};
    let countOfGoods = goods.length;
    for (let i = 0; i < countOfGoods; i++) {
        if (typeof goods[i] == 'object'){
            data.goods.push({title: goods[i].title, count: goods[i].count});
        }
    }

    data.client = `${name} ${phone}`;
    data.order= {address: `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв. ${address.flat}`, sum: Number(sum)};
    let jsonData = JSON.stringify({data});

    return jsonData;
}
