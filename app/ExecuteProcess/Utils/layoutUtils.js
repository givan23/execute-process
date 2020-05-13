export let isShow = (obj) => {
    let _obj = obj instanceof Object ? obj : {status: true};
    return _obj.status === undefined ? true : _obj.status;
};