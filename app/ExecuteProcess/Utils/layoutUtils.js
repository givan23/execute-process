export let isShow = (obj) => {
    let _obj = obj instanceof Object ? obj : {status: false};
    if (_obj.status === undefined) return true;
    else if (_obj.status)  return _obj.status;


};