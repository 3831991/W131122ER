const con = require('../sqlConnection');

module.exports = app => {

    app.post("/login", (req, res) => {
        const { email, password } = req.body;

        // אם נעשו יותר מ-7 נסיונות חיבור
        if (req.session.attemps >= 7) {
            return res.status(403).send({ message: 'כמה נסיונות בן אדם אחד צריך????' });
        }

        // אם אין אימייל או סיסמה
        if (!email || !password) {
            return res.status(403).send({ message: 'What?????' });
        }

        // מבקש את היוזר שעונה על פרטי האימייל והסיסמה
        con.query("SELECT * FROM `users` WHERE `email` = ? AND `password` = MD5(?)", [email, password], (err, result) => {
            if (err) {
                return res.status(500).send({ message: 'Error' });
            }

            // אם אין אף משתמש זה אומר שהששם המשתמש או הסיסמה שגויים
            if (!result.length) {
                // אם לא קיים המשתנה שמונה את נסיונות החיבור, נאתחל אותו לאפס
                if (!req.session.attemps) {
                    req.session.attemps = 0;
                }

                // נספור את נסיון החיבור
                req.session.attemps++;

                return res.status(403).send({ message: 'Email or password is not correct' });
            }

            // אם הגענו לכאן, זה אומר שהחיבור הצליח
            // ולכן, נמחק את המונה של נסיונות החיבור
            delete req.session.attemps;

            // היות וקיבלנו מהשרת את האובייקט בתוך מערך, אנו מוציאים אותו מתוכו
            const user = result.pop();

            // ע"מ לשמור את החיבור של היוזר, הוספנו אותו לסשיין
            req.session.user = user;

            res.send(user);
        });
    });

    app.get('/login', (req, res) => {
        // אם קיים המשתנה בסשיין, זה אומר שהמשתמש מחובר
        if (req.session.user) {
            res.send(req.session.user);
        } else {
            res.status(401).send({ message: 'user is not connected' });
        }
    });

}