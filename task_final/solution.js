function sendRequest(name, phone, address, goods, sum) {
    let data = {client: {}, order: {}, goods: []};
    let countOfGoods = goods.length;
    data.goods = [];
    for (let i = 0; i <= countOfGoods; i++) {
        if (typeof goods[i] == 'object' && goods[i] != null){
            data.goods.push(goods[i]);
            delete data.goods[i].id;
            delete data.goods[i].price;
        }
    }

    data.client = `${name} ${phone}`;
    data.order= {address: `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв. ${address.flat}`, sum: Number(sum)};
    let file = {data: data};
    let jsonData = JSON.stringify(file);

    return jsonData;
}
