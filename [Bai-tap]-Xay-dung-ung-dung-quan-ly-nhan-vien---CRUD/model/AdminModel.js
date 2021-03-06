const database = require('./database')

class AdminModel {
    constructor() {
        this.conn = database.connect()
    }

    show(start,end) {
        return new Promise((resolve, reject) => {
            let sql = `select * from staff limit ${end} offset ${start}`;
            this.conn.query(sql, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data);
                }
            })
        })
    };

    createStaff(user) {
        return new Promise(function (resolve, reject) {
            let name = user.sname;
            let email = user.email;
            let position = user.position;
            let imgPath = user.imgPath;
            console.log(imgPath);
            let sql = `insert into staff (sname, email,position,imgPath) values ('${name}', '${email}', '${position}','${imgPath}')`;
            database.connect().query(sql, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    };

    showInfoStaff(id) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM staff where id = ${id}`;
            this.conn.query(sql, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    };

    deleteStaffViewsSQL(id){
        return new Promise((resolve, reject) => {
            let sql = `delete from staff where id = ${id}`;
            this.conn.query(sql, (err, result) => {
                if(err) {
                  reject(err);
                }else{
                    resolve(result);
                }
            })
        })
    }
}

module.exports = AdminModel;