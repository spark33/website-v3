import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import AnimatedText from '../components/AnimatedText'
import theme from '../styles/theme'

const links = [
  {
    text: 'Resume',
    link: 'https://drive.google.com/file/d/1RPmhrS8cdSWuD1oc2I67fZ8mdYSVQ_Ek/view?usp=sharing',
  },
  {
    text: 'LinkedIn',
    link: 'https://linkedin.com/in/spark6',
  },
]

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '60%',
    },
  },
  jobTitle: {
    display: 'inline-block',
    color: theme.palette.primary.main,
    whiteSpace: 'nowrap',
    '&:before': {
      content: '" "',
    },
    '&:after': {
      content: '" "',
    },
  },
  bodyContainer: {
    marginBottom: theme.spacing(4),
    '& p': {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '40%',
    },
  },
  linkContainer: {
    display: 'inline-block',
    '& a': {
      textDecoration: 'none',
    },
    '&:not(:last-child):after': {
      content: '"/"',
      margin: `0 ${theme.spacing(0.5)}px`,
    },
  },
}))

const Home: React.FunctionComponent = () => {
  const classes = useStyles()
  return (
    <>
      <Box
        px={{ xs: 2, lg: 24 }}
        py={{ xs: 6, md: 12, xl: 20 }}
        pl={{ md: 12, lg: 16, xl: 40 }}
        pr={{ sm: 6, lg: 60 }}
      >
        <Box mb={4}>
          <AnimatedText toggled>
            <Typography variant="h5" style={{ fontWeight: theme.typography.fontWeightLight }}>
              Hey! Thanks for stopping by.
            </Typography>
          </AnimatedText>
        </Box>
        <Box mb={4}>
          <AnimatedText toggled delay={1500}>
            <Typography variant="h3" className={classes.heading}>
              My name is Sean Park, and I&apos;m a{' '}
              <span className={classes.jobTitle}>Creative Technologist</span> at Deloitte Digital.
            </Typography>
          </AnimatedText>
        </Box>
        <Box pl={0.5} className={classes.bodyContainer}>
          <AnimatedText toggled delay={3000}>
            <Typography>
              I&apos;m a UX Designer and Front-end Developer based in Chicago. I love tinkering with
              new technologies, and building elegantly designed products with them.
            </Typography>
            <Typography>
              My website is currently under construction, but will be here very soon with everything
              about my past works and design / development process!
            </Typography>
            <Typography>
              I&apos;m experimenting with{' '}
              <a href="https://www.react-spring.io/" target="_blank" rel="noopener noreferrer">
                React Spring
              </a>{' '}
              and a whole new stack behind the scenes, so it&apos;ll be bigger and better than ever
              💪
            </Typography>
          </AnimatedText>
        </Box>
        <Box pl={0.5}>
          <AnimatedText toggled delay={4500}>
            <Typography>
              {links.map((link, index) => (
                <Box key={index} className={classes.linkContainer}>
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                </Box>
              ))}
            </Typography>
          </AnimatedText>
        </Box>
      </Box>
      <Box></Box>
    </>
  )
}

export default Home
