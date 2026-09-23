import type { LocaleCode } from '$lib/tutorials';

type Item = { title: string; body: string };

export type LandingText = {
	meta: { title: string; description: string; ogTitle: string; ogDescription: string };
	nav: { features: string; guides: string; getApp: string; language: string };
	hero: { eyebrow: string; titleA: string; titleB: string; lede: string; fine: string };
	/** Small line above the store name, e.g. "Download on the" / "Get it on" */
	store: { appStore: string; googlePlay: string };
	/** Labels inside the phone mockup */
	mock: { seeAll: string; folders: string; names: [string, string, string] };
	how: { title: string; steps: [Item, Item, Item] };
	features: { eyebrow: string; title: string; items: [Item, Item, Item, Item, Item, Item] };
	pricing: {
		title: string;
		free: string;
		videos: string;
		freeItems: [string, string, string];
		premium: string;
		unlimited: string;
		premiumItems: [string, string, string];
	};
	cta: { title: string; newHere: string; guidesLink: string };
	footer: { guides: string; contact: string };
};

const en: LandingText = {
	meta: {
		title: 'PickTok — Organize your TikTok & YouTube Shorts favorites',
		description:
			'PickTok saves the short-form videos you love into colorful folders. Share from TikTok or YouTube Shorts, or import from your photo library. Available on iOS and Android.',
		ogTitle: 'PickTok — Your short videos, finally organized',
		ogDescription: 'Save TikTok and YouTube Shorts videos into folders you can actually find again.'
	},
	nav: { features: 'Features', guides: 'Guides', getApp: 'Get the app', language: 'Language' },
	hero: {
		eyebrow: 'For TikTok & YouTube Shorts',
		titleA: 'Your short videos,',
		titleB: 'finally organized.',
		lede: 'Liked it, saved it, never found it again? PickTok files the videos you love into colorful folders, so the recipe, the workout and the one that made you cry-laugh are always one tap away.',
		fine: 'Free to start · One-time upgrade, no subscription'
	},
	store: { appStore: 'Download on the', googlePlay: 'Get it on' },
	mock: { seeAll: 'See All', folders: 'FOLDERS', names: ['Recipes', 'Workout', 'Travel'] },
	how: {
		title: 'From “oh I need to save this” to saved, in three taps.',
		steps: [
			{ title: 'Share', body: 'Tap Share on TikTok or YouTube Shorts and pick PickTok. The link comes straight in.' },
			{ title: 'Thumbnail', body: 'PickTok grabs the cover image. Crop it the way you like it.' },
			{ title: 'Drop it in a folder', body: 'Tap a folder and the video is filed. Find it again in seconds, not scrolls.' }
		]
	},
	features: {
		eyebrow: 'Features',
		title: 'Built for people who save a lot of videos.',
		items: [
			{ title: 'Folders & subfolders', body: 'Recipes › Italian › Pasta. Nest as deep as you like and color-code every folder.' },
			{ title: 'Import from Photos', body: 'Already saved videos to your camera roll? Select several and move them in one go.' },
			{ title: 'Multi Play', body: 'Play several downloaded videos side by side on one screen. Great for comparing moves.' },
			{ title: 'Smart controls', body: 'Set your own skip seconds, jump back to the start, and skip TikTok’s end credits.' },
			{ title: 'Privacy Lock', body: 'Keep your collection to yourself with Face ID or fingerprint unlock at launch.' },
			{ title: 'Drag to reorder', body: 'Hold and drag folders into the order that makes sense to you.' }
		]
	},
	pricing: {
		title: 'Pay once. Keep everything.',
		free: 'Free',
		videos: 'videos',
		freeItems: ['All features included', '+10 more when you leave a review', 'No account, no sign-up'],
		premium: 'Premium',
		unlimited: 'Unlimited',
		premiumItems: ['Save as many videos as you want', 'One-time purchase', 'No subscription, ever']
	},
	cta: { title: 'Start your first folder today.', newHere: 'New here?', guidesLink: 'Read the quick guides →' },
	footer: { guides: 'Guides', contact: 'Contact' }
};

const ko: LandingText = {
	meta: {
		title: 'PickTok — 틱톡·유튜브 쇼츠 영상을 폴더로 정리하세요',
		description:
			'PickTok은 좋아하는 숏폼 영상을 컬러 폴더에 정리해 줍니다. 틱톡이나 유튜브 쇼츠에서 바로 공유하거나 사진 앨범에서 가져오세요. iOS와 Android에서 사용할 수 있습니다.',
		ogTitle: 'PickTok — 흩어진 숏폼 영상, 이제 깔끔하게 정리',
		ogDescription: '틱톡과 유튜브 쇼츠 영상을 다시 찾기 쉬운 폴더에 저장하세요.'
	},
	nav: { features: '기능', guides: '가이드', getApp: '앱 받기', language: '언어' },
	hero: {
		eyebrow: '틱톡 & 유튜브 쇼츠 전용',
		titleA: '흩어진 숏폼 영상,',
		titleB: '이제 깔끔하게 정리.',
		lede: '좋아요 누르고 저장했는데 다시 못 찾은 적 있나요? PickTok은 좋아하는 영상을 컬러 폴더에 정리해 줍니다. 레시피도, 운동 영상도, 배꼽 잡고 웃었던 그 영상도 탭 한 번이면 다시 볼 수 있어요.',
		fine: '무료로 시작 · 한 번 결제, 구독 없음'
	},
	store: { appStore: '다운로드', googlePlay: '다운로드하기' },
	mock: { seeAll: '전체 보기', folders: '폴더', names: ['레시피', '운동', '여행'] },
	how: {
		title: '“이건 저장해야 해”에서 저장 완료까지, 탭 세 번이면 끝.',
		steps: [
			{ title: '공유하기', body: '틱톡이나 유튜브 쇼츠에서 공유를 누르고 PickTok을 선택하세요. 링크가 바로 들어옵니다.' },
			{ title: '썸네일 만들기', body: 'PickTok이 커버 이미지를 가져옵니다. 원하는 대로 잘라 주세요.' },
			{ title: '폴더에 넣기', body: '폴더를 탭하면 저장 끝. 스크롤할 필요 없이 몇 초 만에 다시 찾을 수 있어요.' }
		]
	},
	features: {
		eyebrow: '기능',
		title: '영상을 많이 저장하는 분들을 위해 만들었습니다.',
		items: [
			{ title: '폴더와 하위 폴더', body: '레시피 › 이탈리안 › 파스타. 원하는 만큼 나누고 폴더마다 색을 지정하세요.' },
			{ title: '사진 앨범에서 가져오기', body: '이미 앨범에 저장한 영상이 있나요? 여러 개를 골라 한 번에 옮기세요.' },
			{ title: '멀티 플레이', body: '다운로드한 영상 여러 개를 한 화면에서 나란히 재생하세요. 동작을 비교할 때 딱이에요.' },
			{ title: '스마트 컨트롤', body: '건너뛸 시간을 직접 정하고, 처음으로 돌아가고, 틱톡 엔딩 화면은 건너뛰세요.' },
			{ title: '앱 잠금', body: '앱을 열 때 Face ID나 지문으로 잠금을 풀어 나만 볼 수 있게 하세요.' },
			{ title: '드래그로 순서 변경', body: '폴더를 길게 누른 채 원하는 순서로 옮기세요.' }
		]
	},
	pricing: {
		title: '한 번 결제로 계속 쓰세요.',
		free: '무료',
		videos: '개 영상',
		freeItems: ['모든 기능 사용 가능', '리뷰를 남기면 10개 추가', '계정·회원가입 필요 없음'],
		premium: '프리미엄',
		unlimited: '무제한',
		premiumItems: ['원하는 만큼 영상 저장', '한 번만 결제', '구독 없음, 앞으로도 쭉']
	},
	cta: { title: '지금 첫 폴더를 만들어 보세요.', newHere: '처음이신가요?', guidesLink: '간단 가이드 보기 →' },
	footer: { guides: '가이드', contact: '문의' }
};

const ja: LandingText = {
	meta: {
		title: 'PickTok — TikTok・YouTubeショートのお気に入りをフォルダで整理',
		description:
			'PickTokは、お気に入りのショート動画をカラフルなフォルダに整理できるアプリです。TikTokやYouTubeショートから共有するか、写真ライブラリから取り込めます。iOSとAndroidに対応。',
		ogTitle: 'PickTok — ショート動画を、やっと整理できる。',
		ogDescription: 'TikTokとYouTubeショートの動画を、あとで必ず見つかるフォルダに保存しよう。'
	},
	nav: { features: '機能', guides: 'ガイド', getApp: 'アプリを入手', language: '言語' },
	hero: {
		eyebrow: 'TikTok & YouTubeショート向け',
		titleA: 'ショート動画を、',
		titleB: 'やっと整理できる。',
		lede: 'いいねして保存したのに、二度と見つからない…そんな経験ありませんか？PickTokならお気に入りの動画をカラフルなフォルダに整理。レシピも、筋トレも、爆笑したあの動画も、ワンタップですぐ見返せます。',
		fine: '無料で始められる · 買い切り、サブスクなし'
	},
	store: { appStore: 'ダウンロード', googlePlay: '今すぐ入手' },
	mock: { seeAll: 'すべて', folders: 'フォルダ', names: ['レシピ', '筋トレ', '旅行'] },
	how: {
		title: '「これ保存しなきゃ」から保存完了まで、たった3タップ。',
		steps: [
			{ title: '共有する', body: 'TikTokやYouTubeショートで共有をタップしてPickTokを選ぶだけ。リンクがそのまま届きます。' },
			{ title: 'サムネイル', body: 'PickTokがカバー画像を取得。好きなように切り取れます。' },
			{ title: 'フォルダに入れる', body: 'フォルダをタップすれば保存完了。スクロールせずに数秒で見つかります。' }
		]
	},
	features: {
		eyebrow: '機能',
		title: '動画をたくさん保存する人のために。',
		items: [
			{ title: 'フォルダとサブフォルダ', body: 'レシピ › イタリアン › パスタ。好きなだけ階層を作って、フォルダごとに色分けできます。' },
			{ title: '写真から取り込み', body: 'カメラロールに保存済みの動画も、まとめて選んで一気に移動できます。' },
			{ title: 'マルチ再生', body: 'ダウンロードした動画を1画面で並べて同時再生。動きを見比べるのにぴったり。' },
			{ title: 'スマートな操作', body: 'スキップ秒数を自由に設定、最初に戻る、TikTokのエンドクレジットもスキップ。' },
			{ title: 'プライバシーロック', body: '起動時にFace IDや指紋でロック解除。コレクションは自分だけのものに。' },
			{ title: 'ドラッグで並べ替え', body: 'フォルダを長押ししてドラッグ。自分にとって分かりやすい順番に。' }
		]
	},
	pricing: {
		title: '一度払えば、ずっと使える。',
		free: '無料',
		videos: '本の動画',
		freeItems: ['すべての機能が使える', 'レビューを書くと+10本', 'アカウント登録不要'],
		premium: 'プレミアム',
		unlimited: '無制限',
		premiumItems: ['好きなだけ動画を保存', '買い切り', 'サブスクは一切なし']
	},
	cta: { title: '最初のフォルダを作ってみよう。', newHere: 'はじめての方は', guidesLink: 'かんたんガイドを見る →' },
	footer: { guides: 'ガイド', contact: 'お問い合わせ' }
};

const zhHant: LandingText = {
	meta: {
		title: 'PickTok — 用資料夾整理你喜愛的 TikTok 和 YouTube Shorts',
		description:
			'PickTok 幫你把喜愛的短影音整理進彩色資料夾。直接從 TikTok 或 YouTube Shorts 分享，或從照片圖庫匯入。支援 iOS 與 Android。',
		ogTitle: 'PickTok — 你的短影音，終於井然有序',
		ogDescription: '把 TikTok 和 YouTube Shorts 影片存進真正找得回來的資料夾。'
	},
	nav: { features: '功能', guides: '教學', getApp: '下載 App', language: '語言' },
	hero: {
		eyebrow: '專為 TikTok 與 YouTube Shorts 打造',
		titleA: '你的短影音，',
		titleB: '終於井然有序。',
		lede: '按了喜歡、存了起來，卻再也找不到？PickTok 把你喜愛的影片整理進彩色資料夾，不論是食譜、健身影片，還是讓你笑到流淚的那一部，點一下就能再看。',
		fine: '免費開始 · 一次購買，無需訂閱'
	},
	store: { appStore: '下載於', googlePlay: '立即前往' },
	mock: { seeAll: '全部', folders: '資料夾', names: ['食譜', '健身', '旅行'] },
	how: {
		title: '從「這個要存起來」到存好，只要點三下。',
		steps: [
			{ title: '分享', body: '在 TikTok 或 YouTube Shorts 點分享，選擇 PickTok，連結就會直接進來。' },
			{ title: '縮圖', body: 'PickTok 會抓取封面圖片，照你喜歡的方式裁切。' },
			{ title: '放進資料夾', body: '點一下資料夾就歸檔完成。幾秒鐘就找得到，不必一直滑。' }
		]
	},
	features: {
		eyebrow: '功能',
		title: '為常常收藏影片的你而設計。',
		items: [
			{ title: '資料夾與子資料夾', body: '食譜 › 義式 › 義大利麵。想分幾層就分幾層，每個資料夾都能設定顏色。' },
			{ title: '從照片匯入', body: '影片已經存在相簿裡了？一次選取多部，一口氣移過去。' },
			{ title: '多重播放', body: '在同一個畫面並排播放多部已下載的影片，比對動作超方便。' },
			{ title: '智慧控制', body: '自訂快轉秒數、一鍵回到開頭，還能略過 TikTok 的片尾畫面。' },
			{ title: '隱私鎖', body: '開啟 App 時用 Face ID 或指紋解鎖，收藏只給自己看。' },
			{ title: '拖曳排序', body: '長按資料夾並拖曳，排成最順手的順序。' }
		]
	},
	pricing: {
		title: '一次付費，全部保留。',
		free: '免費',
		videos: '部影片',
		freeItems: ['包含所有功能', '留下評論再加 10 部', '不需帳號、不用註冊'],
		premium: 'Premium',
		unlimited: '無限',
		premiumItems: ['想存多少就存多少', '一次購買', '永遠不需訂閱']
	},
	cta: { title: '今天就建立你的第一個資料夾。', newHere: '第一次使用？', guidesLink: '看看快速教學 →' },
	footer: { guides: '教學', contact: '聯絡我們' }
};

const zhHans: LandingText = {
	meta: {
		title: 'PickTok — 用文件夹整理你喜爱的 TikTok 和 YouTube Shorts',
		description:
			'PickTok 帮你把喜爱的短视频整理进彩色文件夹。直接从 TikTok 或 YouTube Shorts 分享，或从相册导入。支持 iOS 和 Android。',
		ogTitle: 'PickTok — 你的短视频，终于井井有条',
		ogDescription: '把 TikTok 和 YouTube Shorts 视频存进真正找得回来的文件夹。'
	},
	nav: { features: '功能', guides: '教程', getApp: '下载 App', language: '语言' },
	hero: {
		eyebrow: '专为 TikTok 和 YouTube Shorts 打造',
		titleA: '你的短视频，',
		titleB: '终于井井有条。',
		lede: '点了赞、收藏了，却再也找不到？PickTok 把你喜爱的视频整理进彩色文件夹，无论是菜谱、健身视频，还是让你笑出眼泪的那一个，轻点一下就能再看。',
		fine: '免费开始 · 一次购买，无需订阅'
	},
	store: { appStore: '下载于', googlePlay: '立即前往' },
	mock: { seeAll: '全部', folders: '文件夹', names: ['菜谱', '健身', '旅行'] },
	how: {
		title: '从“这个得存下来”到存好，只需轻点三下。',
		steps: [
			{ title: '分享', body: '在 TikTok 或 YouTube Shorts 点分享，选择 PickTok，链接就会直接进来。' },
			{ title: '缩略图', body: 'PickTok 会获取封面图片，按你喜欢的方式裁剪。' },
			{ title: '放进文件夹', body: '轻点文件夹即可归档。几秒钟就能找到，不用一直刷。' }
		]
	},
	features: {
		eyebrow: '功能',
		title: '为经常收藏视频的你而设计。',
		items: [
			{ title: '文件夹与子文件夹', body: '菜谱 › 意式 › 意面。想分几层就分几层，每个文件夹都能设置颜色。' },
			{ title: '从相册导入', body: '视频已经存在相册里了？一次选中多个，一口气移过去。' },
			{ title: '多屏播放', body: '在同一屏幕并排播放多个已下载的视频，对比动作特别方便。' },
			{ title: '智能控制', body: '自定义快进秒数、一键回到开头，还能跳过 TikTok 的片尾画面。' },
			{ title: '隐私锁', body: '打开 App 时用面容 ID 或指纹解锁，收藏只给自己看。' },
			{ title: '拖动排序', body: '长按文件夹并拖动，排成最顺手的顺序。' }
		]
	},
	pricing: {
		title: '一次付费，全部保留。',
		free: '免费',
		videos: '个视频',
		freeItems: ['包含所有功能', '留下评价再加 10 个', '无需账号、无需注册'],
		premium: 'Premium',
		unlimited: '无限',
		premiumItems: ['想存多少就存多少', '一次购买', '永远无需订阅']
	},
	cta: { title: '今天就创建你的第一个文件夹。', newHere: '第一次使用？', guidesLink: '看看快速教程 →' },
	footer: { guides: '教程', contact: '联系我们' }
};

const es: LandingText = {
	meta: {
		title: 'PickTok — Organiza tus TikTok y YouTube Shorts favoritos',
		description:
			'PickTok guarda los vídeos cortos que te encantan en carpetas de colores. Compártelos desde TikTok o YouTube Shorts, o impórtalos desde tu fototeca. Disponible en iOS y Android.',
		ogTitle: 'PickTok — Tus vídeos cortos, por fin organizados',
		ogDescription: 'Guarda vídeos de TikTok y YouTube Shorts en carpetas donde de verdad los vuelvas a encontrar.'
	},
	nav: { features: 'Funciones', guides: 'Guías', getApp: 'Descargar', language: 'Idioma' },
	hero: {
		eyebrow: 'Para TikTok y YouTube Shorts',
		titleA: 'Tus vídeos cortos,',
		titleB: 'por fin organizados.',
		lede: '¿Le diste a me gusta, lo guardaste y nunca más lo encontraste? PickTok ordena los vídeos que te encantan en carpetas de colores, para que la receta, el entrenamiento y ese vídeo que te hizo llorar de risa estén siempre a un toque.',
		fine: 'Empieza gratis · Pago único, sin suscripción'
	},
	store: { appStore: 'Descárgalo en el', googlePlay: 'Disponible en' },
	mock: { seeAll: 'Ver todo', folders: 'CARPETAS', names: ['Recetas', 'Ejercicio', 'Viajes'] },
	how: {
		title: 'De “tengo que guardar esto” a guardado, en tres toques.',
		steps: [
			{ title: 'Comparte', body: 'Toca Compartir en TikTok o YouTube Shorts y elige PickTok. El enlace llega directo.' },
			{ title: 'Miniatura', body: 'PickTok obtiene la imagen de portada. Recórtala como más te guste.' },
			{ title: 'A la carpeta', body: 'Toca una carpeta y el vídeo queda archivado. Encuéntralo en segundos, sin hacer scroll.' }
		]
	},
	features: {
		eyebrow: 'Funciones',
		title: 'Pensado para quienes guardan muchos vídeos.',
		items: [
			{ title: 'Carpetas y subcarpetas', body: 'Recetas › Italiana › Pasta. Anida tantos niveles como quieras y dale un color a cada carpeta.' },
			{ title: 'Importa desde Fotos', body: '¿Ya tienes vídeos en tu carrete? Selecciona varios y muévelos de una vez.' },
			{ title: 'Multirreproducción', body: 'Reproduce varios vídeos descargados a la vez en una sola pantalla. Ideal para comparar movimientos.' },
			{ title: 'Controles inteligentes', body: 'Elige cuántos segundos saltar, vuelve al inicio y sáltate los créditos finales de TikTok.' },
			{ title: 'Bloqueo de privacidad', body: 'Tu colección solo para ti: desbloquea con Face ID o huella al abrir la app.' },
			{ title: 'Arrastra para ordenar', body: 'Mantén pulsada una carpeta y arrástrala al orden que prefieras.' }
		]
	},
	pricing: {
		title: 'Paga una vez. Quédatelo todo.',
		free: 'Gratis',
		videos: 'vídeos',
		freeItems: ['Todas las funciones incluidas', '+10 más si dejas una reseña', 'Sin cuenta ni registro'],
		premium: 'Premium',
		unlimited: 'Ilimitado',
		premiumItems: ['Guarda todos los vídeos que quieras', 'Pago único', 'Sin suscripción, nunca']
	},
	cta: { title: 'Crea tu primera carpeta hoy.', newHere: '¿Eres nuevo?', guidesLink: 'Lee las guías rápidas →' },
	footer: { guides: 'Guías', contact: 'Contacto' }
};

const pt: LandingText = {
	meta: {
		title: 'PickTok — Organize seus favoritos do TikTok e YouTube Shorts',
		description:
			'O PickTok salva os vídeos curtos que você ama em pastas coloridas. Compartilhe direto do TikTok ou YouTube Shorts, ou importe da sua galeria. Disponível para iOS e Android.',
		ogTitle: 'PickTok — Seus vídeos curtos, finalmente organizados',
		ogDescription: 'Salve vídeos do TikTok e YouTube Shorts em pastas onde você realmente vai encontrá-los de novo.'
	},
	nav: { features: 'Recursos', guides: 'Guias', getApp: 'Baixar o app', language: 'Idioma' },
	hero: {
		eyebrow: 'Para TikTok e YouTube Shorts',
		titleA: 'Seus vídeos curtos,',
		titleB: 'finalmente organizados.',
		lede: 'Curtiu, salvou e nunca mais achou? O PickTok organiza os vídeos que você ama em pastas coloridas, para que a receita, o treino e aquele vídeo que te fez chorar de rir estejam sempre a um toque.',
		fine: 'Comece grátis · Compra única, sem assinatura'
	},
	store: { appStore: 'Baixar na', googlePlay: 'Disponível no' },
	mock: { seeAll: 'Ver tudo', folders: 'PASTAS', names: ['Receitas', 'Treino', 'Viagem'] },
	how: {
		title: 'De “preciso salvar isso” a salvo, em três toques.',
		steps: [
			{ title: 'Compartilhe', body: 'Toque em Compartilhar no TikTok ou YouTube Shorts e escolha o PickTok. O link chega na hora.' },
			{ title: 'Miniatura', body: 'O PickTok pega a imagem de capa. Recorte do jeito que preferir.' },
			{ title: 'Jogue na pasta', body: 'Toque em uma pasta e o vídeo fica guardado. Ache de novo em segundos, sem ficar rolando.' }
		]
	},
	features: {
		eyebrow: 'Recursos',
		title: 'Feito para quem salva muitos vídeos.',
		items: [
			{ title: 'Pastas e subpastas', body: 'Receitas › Italiana › Massas. Crie quantos níveis quiser e dê uma cor a cada pasta.' },
			{ title: 'Importe da galeria', body: 'Já tem vídeos salvos no rolo da câmera? Selecione vários e mova todos de uma vez.' },
			{ title: 'Multi Play', body: 'Reproduza vários vídeos baixados lado a lado na mesma tela. Ótimo para comparar movimentos.' },
			{ title: 'Controles inteligentes', body: 'Defina os segundos de avanço, volte ao início e pule os créditos finais do TikTok.' },
			{ title: 'Bloqueio de privacidade', body: 'Sua coleção só para você: desbloqueie com Face ID ou digital ao abrir o app.' },
			{ title: 'Arraste para reordenar', body: 'Segure e arraste as pastas para a ordem que fizer sentido para você.' }
		]
	},
	pricing: {
		title: 'Pague uma vez. Fique com tudo.',
		free: 'Grátis',
		videos: 'vídeos',
		freeItems: ['Todos os recursos incluídos', '+10 ao deixar uma avaliação', 'Sem conta, sem cadastro'],
		premium: 'Premium',
		unlimited: 'Ilimitado',
		premiumItems: ['Salve quantos vídeos quiser', 'Compra única', 'Sem assinatura, nunca']
	},
	cta: { title: 'Crie sua primeira pasta hoje.', newHere: 'Primeira vez?', guidesLink: 'Leia os guias rápidos →' },
	footer: { guides: 'Guias', contact: 'Contato' }
};

const fr: LandingText = {
	meta: {
		title: 'PickTok — Organisez vos TikTok et YouTube Shorts préférés',
		description:
			'PickTok range les vidéos courtes que vous aimez dans des dossiers colorés. Partagez depuis TikTok ou YouTube Shorts, ou importez depuis votre photothèque. Disponible sur iOS et Android.',
		ogTitle: 'PickTok — Vos vidéos courtes, enfin organisées',
		ogDescription: 'Enregistrez vos vidéos TikTok et YouTube Shorts dans des dossiers où vous les retrouverez vraiment.'
	},
	nav: { features: 'Fonctionnalités', guides: 'Guides', getApp: 'Télécharger', language: 'Langue' },
	hero: {
		eyebrow: 'Pour TikTok et YouTube Shorts',
		titleA: 'Vos vidéos courtes,',
		titleB: 'enfin organisées.',
		lede: 'Aimée, enregistrée, jamais retrouvée ? PickTok range les vidéos que vous aimez dans des dossiers colorés : la recette, la séance de sport et celle qui vous a fait pleurer de rire sont toujours à portée de doigt.',
		fine: 'Gratuit pour commencer · Achat unique, sans abonnement'
	},
	store: { appStore: "Télécharger dans l'", googlePlay: 'Disponible sur' },
	mock: { seeAll: 'Tout voir', folders: 'DOSSIERS', names: ['Recettes', 'Sport', 'Voyage'] },
	how: {
		title: 'De « il faut que je garde ça » à enregistré, en trois touches.',
		steps: [
			{ title: 'Partagez', body: 'Touchez Partager dans TikTok ou YouTube Shorts et choisissez PickTok. Le lien arrive directement.' },
			{ title: 'Miniature', body: "PickTok récupère l'image de couverture. Recadrez-la comme vous voulez." },
			{ title: 'Rangez-la', body: 'Touchez un dossier et la vidéo est classée. Retrouvez-la en quelques secondes, sans défiler.' }
		]
	},
	features: {
		eyebrow: 'Fonctionnalités',
		title: 'Conçu pour ceux qui enregistrent beaucoup de vidéos.',
		items: [
			{ title: 'Dossiers et sous-dossiers', body: 'Recettes › Italien › Pâtes. Créez autant de niveaux que vous voulez et donnez une couleur à chaque dossier.' },
			{ title: 'Import depuis Photos', body: 'Des vidéos déjà dans votre pellicule ? Sélectionnez-en plusieurs et déplacez-les d’un coup.' },
			{ title: 'Lecture multiple', body: 'Lisez plusieurs vidéos téléchargées côte à côte sur un seul écran. Idéal pour comparer des mouvements.' },
			{ title: 'Commandes intelligentes', body: 'Choisissez vos secondes de saut, revenez au début et passez le générique de fin de TikTok.' },
			{ title: "Verrouillage de l'app", body: 'Gardez votre collection pour vous avec Face ID ou l’empreinte digitale à l’ouverture.' },
			{ title: 'Glisser pour réorganiser', body: 'Maintenez un dossier et faites-le glisser dans l’ordre qui vous convient.' }
		]
	},
	pricing: {
		title: 'Payez une fois. Gardez tout.',
		free: 'Gratuit',
		videos: 'vidéos',
		freeItems: ['Toutes les fonctionnalités incluses', '+10 en laissant un avis', 'Sans compte ni inscription'],
		premium: 'Premium',
		unlimited: 'Illimité',
		premiumItems: ['Enregistrez autant de vidéos que vous voulez', 'Achat unique', 'Jamais d’abonnement']
	},
	cta: { title: "Créez votre premier dossier dès aujourd'hui.", newHere: 'Nouveau ?', guidesLink: 'Lire les guides rapides →' },
	footer: { guides: 'Guides', contact: 'Contact' }
};

const de: LandingText = {
	meta: {
		title: 'PickTok — Organisiere deine TikTok- und YouTube-Shorts-Favoriten',
		description:
			'PickTok speichert deine liebsten Kurzvideos in farbigen Ordnern. Teile direkt aus TikTok oder YouTube Shorts oder importiere aus deiner Mediathek. Für iOS und Android.',
		ogTitle: 'PickTok — Deine Kurzvideos, endlich geordnet',
		ogDescription: 'Speichere TikTok- und YouTube-Shorts-Videos in Ordnern, in denen du sie wirklich wiederfindest.'
	},
	nav: { features: 'Funktionen', guides: 'Anleitungen', getApp: 'App laden', language: 'Sprache' },
	hero: {
		eyebrow: 'Für TikTok & YouTube Shorts',
		titleA: 'Deine Kurzvideos,',
		titleB: 'endlich geordnet.',
		lede: 'Geliked, gespeichert, nie wiedergefunden? PickTok sortiert deine Lieblingsvideos in farbige Ordner – so sind das Rezept, das Workout und das Video, bei dem du Tränen gelacht hast, immer nur einen Tipp entfernt.',
		fine: 'Kostenlos starten · Einmalkauf, kein Abo'
	},
	store: { appStore: 'Laden im', googlePlay: 'Jetzt bei' },
	mock: { seeAll: 'Alle', folders: 'ORDNER', names: ['Rezepte', 'Workout', 'Reisen'] },
	how: {
		title: 'Von „Das muss ich speichern“ zu gespeichert – mit drei Tipps.',
		steps: [
			{ title: 'Teilen', body: 'Tippe in TikTok oder YouTube Shorts auf Teilen und wähle PickTok. Der Link ist sofort da.' },
			{ title: 'Vorschaubild', body: 'PickTok holt sich das Titelbild. Schneide es zu, wie es dir gefällt.' },
			{ title: 'Ab in den Ordner', body: 'Tippe auf einen Ordner und das Video ist abgelegt. In Sekunden wiedergefunden, ohne Scrollen.' }
		]
	},
	features: {
		eyebrow: 'Funktionen',
		title: 'Für alle, die viele Videos speichern.',
		items: [
			{ title: 'Ordner & Unterordner', body: 'Rezepte › Italienisch › Pasta. Verschachtle beliebig tief und gib jedem Ordner eine Farbe.' },
			{ title: 'Aus Fotos importieren', body: 'Videos schon in der Mediathek? Wähle mehrere aus und verschiebe sie auf einmal.' },
			{ title: 'Multi-Play', body: 'Spiele mehrere heruntergeladene Videos nebeneinander auf einem Bildschirm ab. Ideal zum Vergleichen von Bewegungen.' },
			{ title: 'Smarte Steuerung', body: 'Lege eigene Sprungsekunden fest, springe zum Anfang und überspringe den TikTok-Abspann.' },
			{ title: 'App-Sperre', body: 'Deine Sammlung bleibt privat – entsperre beim Start mit Face ID oder Fingerabdruck.' },
			{ title: 'Per Drag & Drop sortieren', body: 'Halte einen Ordner gedrückt und zieh ihn an die Stelle, die für dich passt.' }
		]
	},
	pricing: {
		title: 'Einmal zahlen. Alles behalten.',
		free: 'Kostenlos',
		videos: 'Videos',
		freeItems: ['Alle Funktionen enthalten', '+10 für eine Bewertung', 'Kein Konto, keine Anmeldung'],
		premium: 'Premium',
		unlimited: 'Unbegrenzt',
		premiumItems: ['Speichere so viele Videos, wie du willst', 'Einmalkauf', 'Niemals ein Abo']
	},
	cta: { title: 'Leg noch heute deinen ersten Ordner an.', newHere: 'Neu hier?', guidesLink: 'Kurzanleitungen lesen →' },
	footer: { guides: 'Anleitungen', contact: 'Kontakt' }
};

const it: LandingText = {
	meta: {
		title: 'PickTok — Organizza i tuoi TikTok e YouTube Shorts preferiti',
		description:
			'PickTok salva i video brevi che ami in cartelle colorate. Condividi da TikTok o YouTube Shorts, oppure importa dalla libreria foto. Disponibile per iOS e Android.',
		ogTitle: 'PickTok — I tuoi video brevi, finalmente in ordine',
		ogDescription: 'Salva i video di TikTok e YouTube Shorts in cartelle dove li ritroverai davvero.'
	},
	nav: { features: 'Funzioni', guides: 'Guide', getApp: "Scarica l'app", language: 'Lingua' },
	hero: {
		eyebrow: 'Per TikTok e YouTube Shorts',
		titleA: 'I tuoi video brevi,',
		titleB: 'finalmente in ordine.',
		lede: 'Messo like, salvato e mai più ritrovato? PickTok sistema i video che ami in cartelle colorate: la ricetta, l’allenamento e quello che ti ha fatto piangere dal ridere sono sempre a un tocco di distanza.',
		fine: 'Inizia gratis · Acquisto unico, nessun abbonamento'
	},
	store: { appStore: 'Scarica su', googlePlay: 'Disponibile su' },
	mock: { seeAll: 'Tutti', folders: 'CARTELLE', names: ['Ricette', 'Allenamento', 'Viaggi'] },
	how: {
		title: 'Da “devo salvarlo” a salvato, in tre tocchi.',
		steps: [
			{ title: 'Condividi', body: 'Tocca Condividi su TikTok o YouTube Shorts e scegli PickTok. Il link arriva subito.' },
			{ title: 'Miniatura', body: 'PickTok prende l’immagine di copertina. Ritagliala come preferisci.' },
			{ title: 'Mettilo in cartella', body: 'Tocca una cartella e il video è archiviato. Lo ritrovi in pochi secondi, senza scorrere.' }
		]
	},
	features: {
		eyebrow: 'Funzioni',
		title: 'Pensato per chi salva tanti video.',
		items: [
			{ title: 'Cartelle e sottocartelle', body: 'Ricette › Italiana › Pasta. Crea tutti i livelli che vuoi e dai un colore a ogni cartella.' },
			{ title: 'Importa da Foto', body: 'Hai già dei video nel rullino? Selezionane diversi e spostali in un colpo solo.' },
			{ title: 'Multi Play', body: 'Riproduci più video scaricati affiancati sullo stesso schermo. Perfetto per confrontare i movimenti.' },
			{ title: 'Controlli smart', body: 'Scegli i secondi di salto, torna all’inizio e salta i titoli di coda di TikTok.' },
			{ title: 'Blocco privacy', body: 'La tua raccolta resta tua: sblocca con Face ID o impronta all’apertura.' },
			{ title: 'Trascina per riordinare', body: 'Tieni premuta una cartella e trascinala nell’ordine che preferisci.' }
		]
	},
	pricing: {
		title: 'Paghi una volta. Tieni tutto.',
		free: 'Gratis',
		videos: 'video',
		freeItems: ['Tutte le funzioni incluse', '+10 lasciando una recensione', 'Nessun account, nessuna registrazione'],
		premium: 'Premium',
		unlimited: 'Illimitato',
		premiumItems: ['Salva tutti i video che vuoi', 'Acquisto unico', 'Mai un abbonamento']
	},
	cta: { title: 'Crea oggi la tua prima cartella.', newHere: 'Sei nuovo?', guidesLink: 'Leggi le guide rapide →' },
	footer: { guides: 'Guide', contact: 'Contatti' }
};

const ru: LandingText = {
	meta: {
		title: 'PickTok — любимые видео из TikTok и YouTube Shorts по папкам',
		description:
			'PickTok сохраняет любимые короткие видео в цветные папки. Делитесь прямо из TikTok или YouTube Shorts или импортируйте из медиатеки. Для iOS и Android.',
		ogTitle: 'PickTok — ваши короткие видео наконец-то в порядке',
		ogDescription: 'Сохраняйте видео из TikTok и YouTube Shorts в папки, где их действительно легко найти.'
	},
	nav: { features: 'Возможности', guides: 'Руководства', getApp: 'Скачать', language: 'Язык' },
	hero: {
		eyebrow: 'Для TikTok и YouTube Shorts',
		titleA: 'Ваши короткие видео',
		titleB: 'наконец-то в порядке.',
		lede: 'Лайкнули, сохранили и больше не нашли? PickTok раскладывает любимые видео по цветным папкам — рецепт, тренировка и то самое видео, над которым вы смеялись до слёз, всегда в одном касании.',
		fine: 'Начните бесплатно · Разовая покупка, без подписки'
	},
	store: { appStore: 'Загрузите в', googlePlay: 'Доступно в' },
	mock: { seeAll: 'Все', folders: 'ПАПКИ', names: ['Рецепты', 'Спорт', 'Путешествия'] },
	how: {
		title: 'От «надо это сохранить» до «сохранено» — за три касания.',
		steps: [
			{ title: 'Поделитесь', body: 'Нажмите «Поделиться» в TikTok или YouTube Shorts и выберите PickTok. Ссылка сразу окажется в приложении.' },
			{ title: 'Миниатюра', body: 'PickTok сам берёт обложку. Обрежьте её так, как вам нравится.' },
			{ title: 'В папку', body: 'Нажмите на папку — и видео на месте. Найдёте его за секунды, без прокрутки.' }
		]
	},
	features: {
		eyebrow: 'Возможности',
		title: 'Для тех, кто сохраняет много видео.',
		items: [
			{ title: 'Папки и подпапки', body: 'Рецепты › Итальянская › Паста. Любая глубина вложенности и свой цвет для каждой папки.' },
			{ title: 'Импорт из «Фото»', body: 'Видео уже в галерее? Выберите сразу несколько и перенесите за один раз.' },
			{ title: 'Мультипросмотр', body: 'Смотрите несколько скачанных видео рядом на одном экране. Удобно сравнивать движения.' },
			{ title: 'Умное управление', body: 'Свой шаг перемотки, возврат к началу и пропуск финальных титров TikTok.' },
			{ title: 'Блокировка приложения', body: 'Коллекция только для вас: разблокировка по Face ID или отпечатку при запуске.' },
			{ title: 'Перетаскивание', body: 'Удерживайте папку и перетащите её туда, где вам удобнее.' }
		]
	},
	pricing: {
		title: 'Платите один раз. Всё остаётся с вами.',
		free: 'Бесплатно',
		videos: 'видео',
		freeItems: ['Все функции включены', '+10 за отзыв', 'Без аккаунта и регистрации'],
		premium: 'Premium',
		unlimited: 'Без лимита',
		premiumItems: ['Сохраняйте сколько угодно видео', 'Разовая покупка', 'Никаких подписок']
	},
	cta: { title: 'Создайте первую папку уже сегодня.', newHere: 'Впервые здесь?', guidesLink: 'Краткие руководства →' },
	footer: { guides: 'Руководства', contact: 'Связаться' }
};

const th: LandingText = {
	meta: {
		title: 'PickTok — จัดวิดีโอโปรดจาก TikTok และ YouTube Shorts ลงโฟลเดอร์',
		description:
			'PickTok เก็บวิดีโอสั้นที่คุณชอบไว้ในโฟลเดอร์หลากสี แชร์จาก TikTok หรือ YouTube Shorts ได้ทันที หรือนำเข้าจากคลังรูปภาพ ใช้ได้ทั้ง iOS และ Android',
		ogTitle: 'PickTok — วิดีโอสั้นของคุณ เป็นระเบียบเสียที',
		ogDescription: 'เก็บวิดีโอ TikTok และ YouTube Shorts ไว้ในโฟลเดอร์ที่หาเจอได้จริง'
	},
	nav: { features: 'ฟีเจอร์', guides: 'คู่มือ', getApp: 'ดาวน์โหลดแอป', language: 'ภาษา' },
	hero: {
		eyebrow: 'สำหรับ TikTok และ YouTube Shorts',
		titleA: 'วิดีโอสั้นของคุณ',
		titleB: 'เป็นระเบียบเสียที',
		lede: 'กดไลก์ กดเซฟ แล้วก็หาไม่เจออีกเลย? PickTok จัดวิดีโอที่คุณชอบลงโฟลเดอร์หลากสี ทั้งสูตรอาหาร คลิปออกกำลังกาย หรือคลิปที่ทำให้ขำจนน้ำตาไหล ก็เปิดดูได้ในแตะเดียว',
		fine: 'เริ่มใช้ฟรี · จ่ายครั้งเดียว ไม่มีรายเดือน'
	},
	store: { appStore: 'ดาวน์โหลดบน', googlePlay: 'ดาวน์โหลดได้ที่' },
	mock: { seeAll: 'ทั้งหมด', folders: 'โฟลเดอร์', names: ['สูตรอาหาร', 'ออกกำลัง', 'เที่ยว'] },
	how: {
		title: 'จาก “อันนี้ต้องเก็บไว้” จนเก็บเสร็จ แค่สามแตะ',
		steps: [
			{ title: 'แชร์', body: 'แตะแชร์ใน TikTok หรือ YouTube Shorts แล้วเลือก PickTok ลิงก์จะเข้ามาทันที' },
			{ title: 'ภาพตัวอย่าง', body: 'PickTok ดึงภาพปกมาให้ ครอบตัดได้ตามใจชอบ' },
			{ title: 'ใส่โฟลเดอร์', body: 'แตะโฟลเดอร์ก็เก็บเรียบร้อย หาเจอในไม่กี่วินาที ไม่ต้องเลื่อนหา' }
		]
	},
	features: {
		eyebrow: 'ฟีเจอร์',
		title: 'ออกแบบมาเพื่อคนที่เซฟวิดีโอเยอะ',
		items: [
			{ title: 'โฟลเดอร์และโฟลเดอร์ย่อย', body: 'สูตรอาหาร › อิตาเลียน › พาสต้า ซ้อนได้หลายชั้นตามต้องการ และกำหนดสีได้ทุกโฟลเดอร์' },
			{ title: 'นำเข้าจากรูปภาพ', body: 'มีวิดีโอในคลังรูปภาพอยู่แล้ว? เลือกหลายรายการแล้วย้ายได้ในครั้งเดียว' },
			{ title: 'เล่นหลายจอ', body: 'เล่นวิดีโอที่ดาวน์โหลดไว้หลายคลิปพร้อมกันบนหน้าจอเดียว เหมาะกับการเทียบท่าทาง' },
			{ title: 'ควบคุมอัจฉริยะ', body: 'ตั้งวินาทีที่จะข้ามเอง ย้อนกลับไปต้นคลิป และข้ามเครดิตท้ายของ TikTok' },
			{ title: 'ล็อกความเป็นส่วนตัว', body: 'เก็บคอลเลกชันไว้ดูคนเดียว ปลดล็อกด้วย Face ID หรือลายนิ้วมือเมื่อเปิดแอป' },
			{ title: 'ลากเพื่อจัดเรียง', body: 'กดค้างที่โฟลเดอร์แล้วลากไปวางในลำดับที่คุณชอบ' }
		]
	},
	pricing: {
		title: 'จ่ายครั้งเดียว ใช้ได้ตลอด',
		free: 'ฟรี',
		videos: 'วิดีโอ',
		freeItems: ['ใช้ได้ทุกฟีเจอร์', 'รับเพิ่มอีก 10 เมื่อเขียนรีวิว', 'ไม่ต้องมีบัญชี ไม่ต้องสมัคร'],
		premium: 'Premium',
		unlimited: 'ไม่จำกัด',
		premiumItems: ['เซฟวิดีโอได้มากเท่าที่ต้องการ', 'ซื้อครั้งเดียว', 'ไม่มีรายเดือนตลอดไป']
	},
	cta: { title: 'สร้างโฟลเดอร์แรกของคุณวันนี้', newHere: 'ใช้ครั้งแรก?', guidesLink: 'อ่านคู่มือฉบับย่อ →' },
	footer: { guides: 'คู่มือ', contact: 'ติดต่อ' }
};

const vi: LandingText = {
	meta: {
		title: 'PickTok — Sắp xếp video TikTok và YouTube Shorts yêu thích vào thư mục',
		description:
			'PickTok lưu những video ngắn bạn yêu thích vào các thư mục nhiều màu. Chia sẻ ngay từ TikTok hoặc YouTube Shorts, hoặc nhập từ thư viện ảnh. Có trên iOS và Android.',
		ogTitle: 'PickTok — Video ngắn của bạn, cuối cùng cũng gọn gàng',
		ogDescription: 'Lưu video TikTok và YouTube Shorts vào những thư mục bạn thật sự tìm lại được.'
	},
	nav: { features: 'Tính năng', guides: 'Hướng dẫn', getApp: 'Tải ứng dụng', language: 'Ngôn ngữ' },
	hero: {
		eyebrow: 'Dành cho TikTok và YouTube Shorts',
		titleA: 'Video ngắn của bạn,',
		titleB: 'cuối cùng cũng gọn gàng.',
		lede: 'Đã thả tim, đã lưu, rồi chẳng bao giờ tìm lại được? PickTok xếp những video bạn yêu thích vào các thư mục nhiều màu, để công thức nấu ăn, bài tập và cả video khiến bạn cười ra nước mắt luôn chỉ cách một chạm.',
		fine: 'Bắt đầu miễn phí · Mua một lần, không đăng ký'
	},
	store: { appStore: 'Tải về trên', googlePlay: 'Tải nội dung trên' },
	mock: { seeAll: 'Tất cả', folders: 'THƯ MỤC', names: ['Nấu ăn', 'Tập luyện', 'Du lịch'] },
	how: {
		title: 'Từ “phải lưu cái này” đến đã lưu, chỉ với ba chạm.',
		steps: [
			{ title: 'Chia sẻ', body: 'Chạm Chia sẻ trên TikTok hoặc YouTube Shorts rồi chọn PickTok. Liên kết sẽ được chuyển vào ngay.' },
			{ title: 'Ảnh thu nhỏ', body: 'PickTok lấy ảnh bìa cho bạn. Cắt theo ý thích.' },
			{ title: 'Cho vào thư mục', body: 'Chạm vào thư mục là xong. Tìm lại trong vài giây, không cần cuộn.' }
		]
	},
	features: {
		eyebrow: 'Tính năng',
		title: 'Dành cho người lưu thật nhiều video.',
		items: [
			{ title: 'Thư mục và thư mục con', body: 'Nấu ăn › Món Ý › Mì Ý. Lồng bao nhiêu cấp tùy thích và tô màu cho từng thư mục.' },
			{ title: 'Nhập từ Ảnh', body: 'Đã có video trong thư viện ảnh? Chọn nhiều video và chuyển tất cả cùng lúc.' },
			{ title: 'Phát nhiều video', body: 'Phát nhiều video đã tải xuống cạnh nhau trên một màn hình. Rất tiện để so sánh động tác.' },
			{ title: 'Điều khiển thông minh', body: 'Tự đặt số giây tua, quay về đầu video và bỏ qua phần kết của TikTok.' },
			{ title: 'Khóa riêng tư', body: 'Giữ bộ sưu tập cho riêng bạn với Face ID hoặc vân tay khi mở ứng dụng.' },
			{ title: 'Kéo để sắp xếp', body: 'Nhấn giữ thư mục và kéo vào thứ tự bạn thấy hợp lý.' }
		]
	},
	pricing: {
		title: 'Trả một lần. Giữ mọi thứ.',
		free: 'Miễn phí',
		videos: 'video',
		freeItems: ['Có đầy đủ tính năng', 'Thêm 10 video khi viết đánh giá', 'Không cần tài khoản, không cần đăng ký'],
		premium: 'Premium',
		unlimited: 'Không giới hạn',
		premiumItems: ['Lưu bao nhiêu video tùy thích', 'Mua một lần', 'Không bao giờ có gói đăng ký']
	},
	cta: { title: 'Tạo thư mục đầu tiên ngay hôm nay.', newHere: 'Lần đầu dùng?', guidesLink: 'Xem hướng dẫn nhanh →' },
	footer: { guides: 'Hướng dẫn', contact: 'Liên hệ' }
};

const id: LandingText = {
	meta: {
		title: 'PickTok — Atur video favorit TikTok & YouTube Shorts ke dalam folder',
		description:
			'PickTok menyimpan video pendek favoritmu ke dalam folder berwarna. Bagikan langsung dari TikTok atau YouTube Shorts, atau impor dari galeri. Tersedia di iOS dan Android.',
		ogTitle: 'PickTok — Video pendekmu, akhirnya rapi',
		ogDescription: 'Simpan video TikTok dan YouTube Shorts ke folder yang benar-benar bisa kamu temukan lagi.'
	},
	nav: { features: 'Fitur', guides: 'Panduan', getApp: 'Unduh aplikasi', language: 'Bahasa' },
	hero: {
		eyebrow: 'Untuk TikTok & YouTube Shorts',
		titleA: 'Video pendekmu,',
		titleB: 'akhirnya rapi.',
		lede: 'Sudah di-like, sudah disimpan, tapi tak pernah ketemu lagi? PickTok merapikan video favoritmu ke dalam folder berwarna, jadi resep, video olahraga, dan video yang bikin ngakak sampai nangis selalu tinggal satu ketukan.',
		fine: 'Mulai gratis · Sekali beli, tanpa langganan'
	},
	store: { appStore: 'Download di', googlePlay: 'Temukan di' },
	mock: { seeAll: 'Semua', folders: 'FOLDER', names: ['Resep', 'Olahraga', 'Traveling'] },
	how: {
		title: 'Dari “ini harus disimpan” sampai tersimpan, cukup tiga ketukan.',
		steps: [
			{ title: 'Bagikan', body: 'Ketuk Bagikan di TikTok atau YouTube Shorts lalu pilih PickTok. Tautannya langsung masuk.' },
			{ title: 'Thumbnail', body: 'PickTok mengambil gambar sampulnya. Potong sesuai selera.' },
			{ title: 'Masukkan ke folder', body: 'Ketuk folder dan video langsung tersimpan. Temukan lagi dalam hitungan detik, tanpa scroll.' }
		]
	},
	features: {
		eyebrow: 'Fitur',
		title: 'Dibuat untuk kamu yang suka menyimpan banyak video.',
		items: [
			{ title: 'Folder & subfolder', body: 'Resep › Italia › Pasta. Buat berlapis sesukamu dan beri warna di setiap folder.' },
			{ title: 'Impor dari Galeri', body: 'Sudah punya video di galeri? Pilih beberapa sekaligus dan pindahkan dalam sekali jalan.' },
			{ title: 'Multi Play', body: 'Putar beberapa video unduhan berdampingan di satu layar. Cocok untuk membandingkan gerakan.' },
			{ title: 'Kontrol pintar', body: 'Atur sendiri detik lompatan, kembali ke awal, dan lewati kredit akhir TikTok.' },
			{ title: 'Kunci Privasi', body: 'Koleksimu hanya untukmu, buka dengan Face ID atau sidik jari saat aplikasi dibuka.' },
			{ title: 'Seret untuk mengurutkan', body: 'Tahan dan seret folder ke urutan yang paling pas buatmu.' }
		]
	},
	pricing: {
		title: 'Bayar sekali. Simpan semuanya.',
		free: 'Gratis',
		videos: 'video',
		freeItems: ['Semua fitur tersedia', '+10 dengan menulis ulasan', 'Tanpa akun, tanpa daftar'],
		premium: 'Premium',
		unlimited: 'Tanpa batas',
		premiumItems: ['Simpan video sebanyak yang kamu mau', 'Sekali beli', 'Tanpa langganan, selamanya']
	},
	cta: { title: 'Buat folder pertamamu hari ini.', newHere: 'Baru di sini?', guidesLink: 'Baca panduan singkat →' },
	footer: { guides: 'Panduan', contact: 'Kontak' }
};

export const landing: Record<LocaleCode, LandingText> = {
	en,
	es,
	pt,
	fr,
	de,
	it,
	ru,
	'zh-Hant': zhHant,
	'zh-Hans': zhHans,
	ja,
	th,
	vi,
	id,
	ko
};
