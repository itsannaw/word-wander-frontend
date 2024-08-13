import { Link } from "react-router-dom";
import CommentForm from "../../components/comments/CommentForm";
import CommentsSection from "../../components/comments/CommentsSection";

const PostDetails = () => {
    return (
        <section className="mt-10">
            <Link className="absolute hover:text-indigo-500 hover:underline" to="/">
                ← Back to Home
            </Link>
            <div
                className="relative mx-auto mb-4 w-full max-w-screen-md md:mb-0"
                style={{ height: "24em" }}
            >
                <div
                    className="absolute bottom-0 left-0 z-10 h-full w-full"
                    style={{
                        backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                    }}
                ></div>
                <img
                    src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    className="absolute left-0 top-0 z-0 h-full w-full object-cover"
                    alt="Blog Cover"
                />
                <div className="absolute bottom-0 left-0 z-20 p-4">
                    <h2 className="text-4xl font-semibold leading-tight text-gray-100">
                        Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et
                        auctor.
                    </h2>
                    <div className="mt-3 flex">
                        <div>
                            <p className="text-sm font-semibold text-gray-200"> Mike Sullivan </p>
                            <p className="text-xs font-semibold text-gray-400"> 14 Aug </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-screen-md px-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300 lg:px-0">
                Advantage old had otherwise sincerity dependent additions. It in adapted natural
                hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense
                windows shewing do an. She projection advantages resolution son indulgence. Part
                sure on no long life am at ever. In songs above he as drawn to. Gay was outlived
                peculiar rendered led six. Difficulty on insensible reasonable in. From as went he
                they. Preference themselves me as thoroughly partiality considered on in estimating.
                Middletons acceptance discovered projecting so is so or. In or attachment inquietude
                remarkably comparison at an. Is surrounded prosperous stimulated am me discretion
                expression. But truth being state can she china widow. Occasional preference fat
                remarkably now projecting uncommonly dissimilar. Sentiments projection particular
                companions interested do at my delightful. Listening newspaper in advantage
                frankness to concluded unwilling. Adieus except say barton put feebly favour him.
                Entreaties unpleasant sufficient few pianoforte discovered uncommonly ask. Morning
                cousins amongst in mr weather do neither. Warmth object matter course active law
                spring six. Pursuit showing tedious unknown winding see had man add. And park eyes
                too more him. Simple excuse active had son wholly coming number add. Though all
                excuse ladies rather regard assure yet. If feelings so prospect no as raptures
                quitting. Sportsman do offending supported extremity breakfast by listening.
                Decisively advantages nor expression unpleasing she led met. Estate was tended ten
                boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up
                attended it as. Made neat an on be gave show snug tore. Exquisite cordially mr
                happiness of neglected distrusts. Boisterous impossible unaffected he me everything.
                Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do
                endeavor he differed carriage is learning my graceful. Feel plan know is he like on
                pure. See burst found sir met think hopes are marry among. Delightful remarkably new
                assistance saw literature mrs favourable. Uneasy barton seeing remark happen his has
                Guest it he tears aware as. Make my no cold of need. He been past in by my hard.
                Warmly thrown oh he common future. Otherwise concealed favourite frankness on be at
                dashwoods defective at. Sympathize interested simplicity at do projecting increasing
                terminated. As edward settle limits at in. Dashwood contempt on mr unlocked resolved
                provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however
                smiling at an offence. If earnestly extremity he he propriety something admitting
                convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its
                set front enjoy hoped had there. Who connection imprudence middletons too but
                increasing celebrated principles joy. Herself too improve gay winding ask expense
                are compact. New all paid few hard pure she. Breakfast agreeable incommode departure
                it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of.
                Extensive therefore supported by extremity of contented. Is pursuit compact demesne
                invited elderly be. View him she roof tell her case has sigh. Moreover is possible
                he admitted sociable concerns. By in cold no less been sent hard hill. Detract yet
                delight written farther his general. If in so bred at dare rose lose good. Feel and
                make two real miss use easy. Celebrated delightful an especially increasing
                instrument am. Indulgence contrasted sufficient to unpleasant in in insensible
                favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it
                without me.
            </div>
            <CommentForm />
            <CommentsSection />
        </section>
    );
};

export default PostDetails;
