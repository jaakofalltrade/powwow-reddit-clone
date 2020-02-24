import React from 'react';
import {
    BodyCommunity,
    CommunityBody,
    CommunityContent,
    LoadMoreBtn,
} from "../StyledComponents/StyledDashboard.jsx";
import apiService from "../../../api/Api";
import LoaderAll from "../../common-components/LoaderAll/LoaderAll.jsx";

const ContentBox = () => {
    const [loadData, setLoadData] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [community, setCommunity] = React.useState({});
    const [results, setResults] = React.useState([]);

    React.useEffect(() => {
        async function getCommunity() {
            try {
                let response = await apiService.getCommunities("/community/");
                setCommunity(response.data);
                setResults(response.data.results);
                setLoading(false);
            } catch {
                setCommunity({});
            }
        }
        getCommunity();
    }, []);

    const getLoad = async () => {
        setLoadData(true);
        let response = await apiService.getCommunities(community.next);
        setLoadData(false)
        setCommunity(response.data);
        setResults([...results, ...response.data.results]);
    }

    return !loading ? (
        <React.Fragment>
            {results.map(x => (
                <BodyCommunity key={x.id}>
                    <CommunityBody>
                        <CommunityContent flex={2} height='60px' alignItems="center">
                            <h4><a style={{ color: '#1976d2', }} href={'#' + x.id}>p/{x.community_name}</a></h4>
                        </CommunityContent>
                        <CommunityContent flex={1} height='40px' alignItems="start">
                            {x.community_description}
                        </CommunityContent>
                        <CommunityContent flex={1} height='30px' alignItems="center">
                            <h3>TBD</h3>
                        </CommunityContent>
                    </CommunityBody>
                </BodyCommunity>

            ))}
            {
                loadData && (
                    <div
                        style={{
                            width: "100%",
                            height: "50px",
                        }}
                    >
                        <LoaderAll />
                    </div>
                )
            }
            {
                community.next !== null ? (
                    <LoadMoreBtn disabled={loadData} onClick={getLoad}>
                        Load More
                    </LoadMoreBtn>
                ) : (
                        <h1>Nothing new to show!</h1>
                    )
            }
        </React.Fragment>
    ) : (
            <LoaderAll />
        )
}

export default ContentBox;