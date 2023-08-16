import Head from 'next/head';
import Link from 'next/link';
import Styles from '../styles/select.module.css'

const siteTitle = 'select page'

export default function Select() {
	return (
        <div>
	    <Head>
			<title>{siteTitle}</title>
		</Head>
        <main>
            <div className={Styles.button_container}>
                <Link href='/input_page'>
                <button>記録を入力する</button>
                </Link>
                <Link href='/look_score'>
                <button>過去の記録を見る</button>
                </Link>
                <Link href='/add_exercise'>
                <button>種目を追加する</button>
                </Link>
            </div>
        </main>
        </div>
	);
}