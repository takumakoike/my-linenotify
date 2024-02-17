// Vercelのサーバーレス関数でLINEのアクセストークンを取得
export default async (req, res) => {
    if (req.method === 'POST') {
        const { code } = req.body;
        console.log(code)
        const CLIENT_ID = process.env.CLIENTID;
        const CLIENT_SECRET = process.env.CLIENTSECRET;
        const REDIRECT_URI = process.env.REDIRECT_URI;

        try {
        const response = await fetch("https://notify-bot.line.me/oauth/token", {
            method: "POST",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                code:code,
                redirect_uri: REDIRECT_URI,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            })
        });

        const data = await response.json();

        if (data.access_token) {
            // アクセストークンをクライアントに返す
            res.status(200).json({ accessToken: data.access_token });
        } else {
            // エラーレスポンス
            res.status(400).json({ error: "Failed to obtain access token" });
        }
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    } else {
        // POSTリクエスト以外は許可しない
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};