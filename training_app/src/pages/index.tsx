import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import type { PostData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import inputStyles from '../styles/input_form.module.css'

type Props = {
	allPostsData: PostData[];
};
export const getStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};
export default function Home({ allPostsData }: Props) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
      <div className={inputStyles.form_row}>
        <label for="id">ID</label>
        <input type="text" id="id"></input>
      </div>
      <div className={inputStyles.form_row}>
        <label for="password">パスワード</label>
        <input type="password" id="password"></input>
      </div>
			</section>
		</Layout>
	);
}
