import {Box, Divider, Drawer, Tab, Tabs, Typography} from '@mui/material'
import Link from 'next/link'
import {gallery} from '@/data/galleryList'
import {grey} from '@mui/material/colors'

type menuDrawerProps = {
    item: string
    galleries: gallery[]
}

const drawerWidth = 200

// This renders the side menu drawer
// which has entries for all portfolio sections
export default function MenuDrawer(props: menuDrawerProps) {
    // Filter out galleries that are already mapped to portfolio sections
    // Also filter out any "About" entries to prevent duplicates
    const filteredGalleries = props.galleries.filter(gallery => 
        !gallery.section && gallery.key.toLowerCase() !== 'about'
    );
    
    // The drawer is a permanent drawer, so it is always visible.
    return <Drawer id="menu-drawer" variant="permanent" sx={{
        width: drawerWidth, flexShrink: 0,
        [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
    }}>
        {/* a box for the content - full height with small padding */}
        <Box sx={{p: 1, height: '100%'}}>
            {/*Site name*, with a little extra space between the divider to make it pretty */}
            <Typography variant="h6" noWrap component="div" align="center" >
                <Link style={{color: grey[600], textDecoration: 'none'}} href="/">Hathim Ashir</Link>
            </Typography>
            <Divider sx={{mt: 1}}/>

            {/*The tabs for all portfolio sections*/}
            <Tabs
                value={props.item}
                variant="scrollable"
                scrollButtons="auto"
                orientation="vertical"
            >
                {/*About page*/}
                <Tab value="about" label="About" href="/" component={Link} key="about" className="tab-link"/>
                
                {/*Portfolio sections*/}
                <Tab value="reels" label="Reels" href="/reels" component={Link} key="reels" className="tab-link"/>
                <Tab value="interview" label="Interview" href="/interview" component={Link} key="interview" className="tab-link"/>
                <Tab value="photo-essay" label="Photo Essay" href="/photo-essay" component={Link} key="photo-essay" className="tab-link"/>
                <Tab value="podcast" label="Podcast" href="/podcast" component={Link} key="podcast" className="tab-link"/>
                <Tab value="campaign" label="Marketing Campaign" href="/campaign" component={Link} key="campaign" className="tab-link"/>
                <Tab value="internship" label="Multimedia Internship" href="/internship" component={Link} key="internship" className="tab-link"/>
                <Tab value="articles" label="Featured Articles" href="/articles" component={Link} key="articles" className="tab-link"/>
                <Tab value="photos" label="Published Photos" href="/photos" component={Link} key="photos" className="tab-link"/>
                <Tab value="magazine" label="Magazine" href="/magazine" component={Link} key="magazine" className="tab-link"/>
                <Tab value="documentary" label="Documentary" href="/documentary" component={Link} key="documentary" className="tab-link"/>

                {/*Display only galleries that aren't already mapped to a portfolio section*/}
                {filteredGalleries.map((item) =>
                    <Tab label={item.title} value={item.key} href={item.url}
                         component={Link} key={item.key} className="tab-link"/>)}
            </Tabs>
        </Box>
    </Drawer>

}
