import ResponsiveAppBar from "../../components/navbar/Navbar"
import "./Archive.css";
import ArchiveCards from "../../components/archive/ArchiveCards";
import Grid from '@mui/material/Unstable_Grid2'; 
import Container from '@mui/material/Container';
import SearchBoxArchive from "../../components/archive/SearchBoxArchive";
import { useState } from "react";
import { margin } from "@mui/system";
            
            
            
            
            
function Archive() {
const titles= ["XL", "word" ,"powerpoint", "R&D", "vs code", "former employes", "projects", "activity", "IT", "R&D", "Social activity", "maintenance"]
const [query,setQuery]= useState("")
const search = (titles) => {
return titles.filter((item) => item.title.tolowerCase().includes(query));
                }
                
return(
                    <div className="archive">
                            <ResponsiveAppBar/>,
                        <h1 className="ArchiveTitle">company archive:</h1>
                        <h2>looking for comany data?</h2>
                        <div className="SearchBox">
                        <SearchBoxArchive 
                        onChange={(e)=>setQuery(e.target.value)}
                         label="search in archive"
                         files = {[
                            { label: 'XL'},
                            { label: 'power poins'},
                            { label: 'Word files'},
                            { label: 'VS code'},
                            { label: 'PDF files'},
                            { label: "Formers employes"},
                            { label: 'Company project'},
                            { label: 'volunteering'},
                            { label: 'IT'},
                            { label: 'Reasearch'},
                            { label: 'Social activity'},
                            { label: 'maintenance'},
                          ]}
                         />
                        </div>
                        <Container maxWidth="lg" >
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                        <ArchiveCards  className="cards"
                         component="img"
                         height={140}
                         image="https://static1.shine.com/l/m/images/blog/excel_ms.png"
                         alt="XL files"
                         description="past XL files"
                         title={titles[0]}
                         label="search an xl file"
                         files = {[
                             { label: 'XL1'},
                             { label: 'XL2'},
                             { label: 'XL3'},
                             { label: 'XL4'},
                             { label: 'XL5'},
                             { label: "XL6"},
                             { label: 'XL7'},
                             { label: 'XL8'},
                             { label: 'XL9'},
                             { label: 'XL10'},
                             { label: 'XL11'},
                             { label: 'XL12'},
                           ]}
                         />
                        </Grid>
                        <Grid item xs={3}>
                        <ArchiveCards
                        component="img"
                        height={140}
                        image="https://www.easylifeit.com/wp-content/uploads/2020/05/word.png"
                        alt="word files"
                        description="past word files"
                        title={titles[1]}
                        label="search a word file"
                        files = {[
                            { label: 'Word1'},
                            { label: 'Word2'},
                            { label: 'Word3'},
                            { label: 'Word4'},
                            { label: 'Word5'},
                            { label: "Word6"},
                            { label: 'Word7'},
                            { label: 'Word8'},
                            { label: 'Word9'},
                            { label: 'WordX10'},
                            { label: 'Word11'},
                            { label: 'Word12'},
                          ]}
                        />
                        </Grid>
                        <Grid item xs={3}>
                        <ArchiveCards
                        component="img"
                        height={140}
                        image="https://i1.wp.com/static.techbast.com/2019/09/powerpoint-2016.png?resize=678%2C381&ssl=1"
                        alt="power point"
                        description="past power point presentions"
                        title={titles[2]}
                        label="search a Power point file"
                        files = {[
                            { label: 'Power point1'},
                            { label: 'Power point2'},
                            { label: 'Power point3'},
                            { label: 'Power point4'},
                            { label: 'Power point5'},
                            { label: "Power point6"},
                            { label: 'Power point7'},
                            { label: 'Power point8'},
                            { label: 'Power point9'},
                            { label: 'Power point10'},
                            { label: 'Power point11'},
                            { label: 'Power point12'},
                          ]}
                        />
                        </Grid>
                        <Grid item xs={3}>
                        <ArchiveCards
                       component="img"
                       height={140}
                       image="https://www.logolynx.com/images/logolynx/df/dfabddba4c224f1a4c46eeb6a3c2d75e.jpeg"
                       alt="PDF"
                       description="past PDF files"
                       title={titles[3]}
                       label="search a PDF file"
                        files = {[
                            { label: 'PDF1'},
                            { label: 'PDF2'},
                            { label: 'PDF3'},
                            { label: 'PDF4'},
                            { label: 'PDF5'},
                            { label: "PDF6"},
                            { label: 'PDF7'},
                            { label: 'PDF8'},
                            { label: 'PDF9'},
                            { label: 'PDF10'},
                            { label: 'PDF11'},
                            { label: 'PDF12'},
                          ]}
                       />
                        </Grid>
                    </Grid>
                </Container>
            
                        <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <ArchiveCards
                        component="img"
                        height={140}
                        image="https://freelancervietnam.vn/wp-content/uploads/2020/01/avatar2.jpg"
                        alt="vsc"
                        description="past VS code files"
                        title={titles[4]}
                        label="search a VS code file"
                        files = {[
                            { label: 'VS code1'},
                            { label: 'VS code2'},
                            { label: 'VS code3'},
                            { label: 'VS code4'},
                            { label: 'VS code5'},
                            { label: "VS code6"},
                            { label: 'VS code7'},
                            { label: 'VS code8'},
                            { label: 'VS code9'},
                            { label: 'VS code10'},
                            { label: 'VS code11'},
                            { label: 'VS code12'},
                          ]}
                        />
                        </Grid>
                        <Grid item xs={3}>
                        <ArchiveCards
                        component="img"
                        height={140}
                        image="https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE="
                        alt="former employes"
                        description="information on former employes"
                        title={titles[5]}
                        label="search a former employes file"
                        files = {[
                            { label: 'former employes1'},
                            { label: 'former employes2'},
                            { label: 'former employes3'},
                            { label: 'former employes4'},
                            { label: 'former employes5'},
                            { label: "former employes6"},
                            { label: 'former employes7'},
                            { label: 'former employes8'},
                            { label: 'former employes9'},
                            { label: 'former employes10'},
                            { label: 'former employes11'},
                            { label: 'former employes12'},
                          ]}
                          />
                        </Grid>
                        <Grid item xs={3}>
                        <ArchiveCards
                        component="img"
                        height={140}
                        image="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80"
                        alt="projects"
                        description="past company projects"
                        title={titles[6]}
                        label="search a project file"
                        files = {[
                            { label: 'project1'},
                            { label: 'project2'},
                            { label: 'project3'},
                            { label: 'project4'},
                            { label: 'project5'},
                            { label: "project6"},
                            { label: 'project7'},
                            { label: 'project8'},
                            { label: 'project9'},
                            { label: 'project10'},
                            { label: 'project11'},
                            { label: 'project12'},
                          ]}
                        />
                        </Grid>
                        <Grid item xs={3}>
                        <ArchiveCards
                        component="img"
                        height={140}
                        image="https://thumbs.dreamstime.com/b/volunteer-charity-helping-hands-give-concept-69202170.jpg"
                        alt="Volunteering activity"
                        description="companys Volunteering activity"
                        title={titles[7]}
                        label="search a Volunteering activity file"
                        files = {[
                            { label: 'activity1'},
                            { label: 'activity2'},
                            { label: 'activity3'},
                            { label: 'activity4'},
                            { label: 'activity5'},
                            { label: "activity6"},
                            { label: 'activity7'},
                            { label: 'activity8'},
                            { label: 'activity9'},
                            { label: 'activity10'},
                            { label: 'activity11'},
                            { label: 'activity12'},
                          ]}
                        />
                        </Grid>
                    </Grid>
                </Container>
                        <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <ArchiveCards
                            component="img"
                            height={140}
                            image="https://thumbs.dreamstime.com/b/consultant-presenting-tag-cloud-information-technology-227624274.jpg"
                            alt="IT"
                            description="IT depatment files"
                            title={titles[8]}
                            label="search a IT file"
                        files = {[
                            { label: 'IT 1'},
                            { label: 'IT 2'},
                            { label: 'IT 3'},
                            { label: 'IT 4'},
                            { label: 'IT 5'},
                            { label: "IT 6"},
                            { label: 'IT 7'},
                            { label: 'IT 8'},
                            { label: 'IT 9'},
                            { label: 'IT 10'},
                            { label: 'IT 11'},
                            { label: 'IT 12'},
                          ]}
                            />
                        </Grid>
                        <Grid item xs={3}>
                        <ArchiveCards
                        component="img"
                        height={140}
                        image="https://thumbs.dreamstime.com/z/closeup-r-d-research-development-wood-letters-group-english-alphabet-r-d-research-development-wood-letters-122140882.jpg"
                        alt="R&D"
                        description="company R&D"
                        title={titles[9]}
                        label="search an R&D file"
                        files = {[
                            { label: 'R&D file1'},
                            { label: 'R&D file2'},
                            { label: 'R&D file3'},
                            { label: 'R&D file4'},
                            { label: 'R&D file5'},
                            { label: "R&D file6"},
                            { label: 'R&D file7'},
                            { label: 'R&D file8'},
                            { label: 'R&D file9'},
                            { label: 'R&D file10'},
                            { label: 'R&D file11'},
                            { label: 'R&D file12'},
                          ]}
                        />
                        </Grid>
                        <Grid item xs={3}>
                        <ArchiveCards
                        component="img"
                        height={140}
                        image="https://us.123rf.com/450wm/pandorapictures/pandorapictures1911/pandorapictures191100056/133192022-volunteering-young-people-volunteers-outdoors-planting-trees-digging-ground-talking-cheerful.jpg?ver=6"
                        alt="Social activity"
                        description="Social activity"
                        title={titles[10]}
                        label="search a Social activity file"
                        files = {[
                            { label: 'Social activity1'},
                            { label: 'Social activity2'},
                            { label: 'Social activity3'},
                            { label: 'Social activity4'},
                            { label: 'Social activity5'},
                            { label: "Social activity6"},
                            { label: 'Social activity7'},
                            { label: 'Social activity8'},
                            { label: 'Social activity9'},
                            { label: 'Social activity10'},
                            { label: 'Social activity11'},
                            { label: 'Social activity12'},
                          ]}
                        />
                        </Grid>
                        <Grid item xs={3}>
                        <ArchiveCards
                        component="img"
                        height={140}
                        image="https://img.freepik.com/free-vector/maintenance-concept-illustration_114360-391.jpg"
                        alt="maintenance"
                        description="maintenance"
                        title={titles[11]}
                        label="search a maintenance file"
                        files = {[
                            { label: 'maintenance1'},
                            { label: 'maintenance2'},
                            { label: 'maintenance3'},
                            { label: 'maintenance4'},
                            { label: 'maintenance5'},
                            { label: "maintenance6"},
                            { label: 'maintenance7'},
                            { label: 'maintenance8'},
                            { label: 'maintenance9'},
                            { label: 'maintenance10'},
                            { label: 'maintenance11'},
                            { label: 'maintenance12'},
                          ]}
                        />
                        </Grid>
                    </Grid>
                </Container>
                <div className="archivefotter">
                  <p>
                  <h1 style={{lineHeight: 1.25, fontSize: "65px", paddingTop:"10vh",}}>soccess is not final. failur is not fatal.
                  <br/>it is the courage to countinue that counts.</h1>
                  <h3>winston churchill</h3>
                </p>
                </div>
                    </div>
                   
                      
                    

);
}

export default Archive
            
            