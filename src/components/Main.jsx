import React, { useRef } from 'react';
import desktopImage from '../images/Pers2.jpg';
import mobileImage from '../images/Pers01.jpg';
import Myimage1 from '../images/Pers5.jpeg';
import Myimage2 from '../images/Persik87.jpg';
import Myimage3 from '../images/Pers6.jpeg';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button, CardMedia, Paper, Stack, Typography } from '@mui/material';


const imageUrl = window.innerWidth >= 900 ? desktopImage : mobileImage;
const attachment = window.innerWidth >= 900 ? "fixed" : "scroll";

const styles = {
  paperContainer: {
    flex: 1,
    padding: 0.1,
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    backgroundAttachment: `${attachment}`,
    backgroundSize: "cover",
    MozBackgroundSize: "cover", 
    WebkitBackgroundSize: "cover",
  },
};

const Main = () => {
  let navigate = useNavigate();
  const bottom = useRef(null);
  const top1 = useRef(null);
  const top2 = useRef(null);

  const scrollDownOrTop = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <Box bgcolor={'#F5F3F1'} >
      <Typography ref={top1} style={{position:'absolute', top: 0}}></Typography>
      <Typography ref={top2} style={{position:'absolute', top: 0}}></Typography>
      {/* FIRS PART OF PAGE */}
      <Paper 
      style={styles.paperContainer}
      >
        <Box    
          display="flex" flexDirection="column" justifyContent="space-between"
          height={'66vh'}
          pt={{ xs: 1, md: 5 }}
          pl={{ xs: 2, md: 12 }}
          pr={{ xs: 2, md: 12 }}
        >
          <Typography
            color={{xs: "white", md: "black"}}
            fontSize={{ xs: 30, sm: 50, md: 50 }}
            fontWeight={{ xs: 700, md: 600 }}
            fontFamily={{ md: 'Shantell Sans', sm: "Roboto" }}
          >
            Персик - серебристый пушистый кот
          </Typography>
          
          <Typography
            color={{xs: "white", md: "black"}}
            fontSize={{xs: 20, sm: 25, md: 30}}
            fontWeight={{ xs: 700, md: 500 }}
            fontFamily={{ md: 'Shantell Sans', xs: "Roboto" }}
            width={{ md: 700, sm: 500 }}
            style={{wordWrap: "break-all"}}
          >
            Персик - серебристый пушистый кот.<br/>  
            Он родился 1 апреля 2008
            года в России. «Персик» потому-что он персидских корней. Сам же Персик
            считал себя аристократом - потомком Плантагенетов, Бурбонов и Рюриковичей.
            Персик ушел из жизни 5 августа 2022 года. My sweet boy is gone, RIP.
            Этот сайт в память о нем.
          </Typography>
          {/* BUTTONS */}
          <Stack ml={{md:10,xs: 2}}
            direction="row" 
            gap={{md:6, xs: 2}}
          >
            <Button onClick={() => navigate('/about')}
              variant='outlined'
              sx={{
                color: '#fff', backgroundColor: '#000', borderColor: '#000',
                fontFamily: { md: 'Shantell Sans', xs: "Roboto" },
                fontSize: {md:18, sx: 10},
                fontWeight: {md:400, sx: 200},
                width: {md:180, xs: 100},
                height: {md:60, xs: 40}
              }}>
              ABOUT
            </Button>
            <Button onClick={() => navigate('/album')} variant="contained"
              sx={{
                color: '#000', backgroundColor: '#f0f0f0', borderColor: 'transparent',
                fontFamily: { md: 'Shantell Sans', xs: "Roboto" },
                fontSize: {md:18, sx: 10},
                fontWeight: {md:400, sx: 200},
                width: {md:180, xs: 100},
                height: {md:60, xs: 40}
              }}>
              PHOTOS
            </Button>
          </Stack>
        </Box>
        <Box mb={-1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1199 425"
            fill="none"  
          >
            <path
              d="M1198.7 0.58252C587.548 187.543 145.103 153.004 0.275391 112.365V424.825H1198.7V153.764V0.58252Z"
              fill="#F5F3F1"
            />
          </svg>
          {/* SCROLL DOWN */}
          <Typography
            sx={{
              position: "absolute",
              right: {xs: "8%", md:"5%", lg: "3%"},
              transform: {xs: 'translateY(-15vh) rotate(90deg)', md: 'translateY(-40vh) rotate(90deg)'},
              height: "140px",
              fontSize: {xs: 12, lg: 16}, 
              fontWeight: 700,
              color: "#ff8562",
              cursor: "pointer"
            }}
            onClick={() => scrollDownOrTop(bottom)}
          >
            SCROLL DOWN
          </Typography>
        </Box>
      </Paper>
      {/* SECOND PART OF PAGE */}
      <Stack 
        direction={"row"} 
        gap={10}
        pl={{md: 10, xs: 0}} 
        pr={{md: 15, xs: 0}} 
        mt={{lg:-30, md:-15, xs: 0}}
      >
        {/* COLUMN 1 */}
        <Stack
          direction={"column"}
          width={'50%'}
          display={{ xs: "none", md: "flex" }}
        >
          <Box>
            <CardMedia
              component="img"
              height="100%"
              src={Myimage1}
              alt="Persik's photo 1"
            />
          </Box>
          <Box mt={5}
            pl={0}>
            <CardMedia
              component="img"
              height="100%"
              src={Myimage2}
              // src="https://static.tildacdn.com/tild6232-3335-4532-b630-316437633033/Layer_1.svg"
              alt="Cat's Pic 1"
            />
          </Box>
          <Box mt={5}>
            <CardMedia
              component="img"
              height="100%"
              src={Myimage3}
              alt="Persik's photo 1"
            />
          </Box>
          <Box 
            mt={5}
            display='flex'
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            {/* SCROLL UP */}
            <Typography
              sx={{
                width: "100%",
                height:"30%",
                fontSize: {md: 12, lg:16},
                fontWeight: 700,
                color: "#ff8562",
                transform: 'rotate(270deg)',
                cursor: "pointer",
              }}
              onClick={() => scrollDownOrTop(top1)}
            >
              SCROLL UP
            </Typography>
            <CardMedia
              component="img"
              height="80%"
              src="https://static.tildacdn.com/tild3765-3135-4565-b861-383831366635/Layer_2_2.svg"
              alt="Cat's Pic 2"
            />
          </Box>
        </Stack>
        {/* COLUMN 2 */}
        <Stack
          direction={'column'}
          width={{xs:'90%', md:'50%'}}
          gap={5}
          pl={{xs:'5%', md:'0%'}}
        >
          <Typography
            fontSize={{ md: 40, sm: 40, xs: 23 }}
            fontWeight={{md: 500, sm: 400, xs: 700}}
            fontFamily={{ md: 'Shantell Sans', xs: "Roboto" }}
            textAlign={"center"}
          >
            История Персика
          </Typography>
          <Box width={"100%"} alignItems={'center'} justifyContent={'center'} >
            <CardMedia
              component="img"
              src={Myimage3}
              // src="https://static.tildacdn.com/tild6232-3335-4532-b630-316437633033/Layer_1.svg"
              alt="Cat's Pic 1"
              sx={{display:{xs:"block", md: "none"}}}
            />
          </Box>
          <Typography
            fontSize={{ xl: 20.5, lg: 15, md: 15, sm: 15, sx: 15 }}
            fontWeight={{xl: 400, lg: 400, md: 300, xs: 400}}
            lineHeight={2}
            fontFamily={{ md: 'Shantell Sans', xs: "Roboto" }}
          >
            Персик у нас появился случайно, когда мы ехали на дачу мимо базара, где женщина
            раздавала котят от персидской кошки, но их папа был дворовый кот
            (подозреваем, что он был сибиряком). Персик был единственный среди
            братьев и сестер с не приплюснутым носом и окраса Вискас. И он мяукал так громко
            на весь рынок, что привлекло наше внимание на него. И вот через 5 он уже
            ехал с нами домой. Он был такой милый и очаровательный, что все наши родственнники
            и друзья полюбили его.
            <br />
            <br />
            У Персика была очень густая шерсть. В детстве он был более серый и в полоску.
            Когда он был крохотный непонятно было, что он настолько пушистым вырастет.
            В возрасте года уже стало понятно, что он меховой моторчик.
            И расчесываться он не ужасно не любил, стал лохматым и еле-еле давал
            отрезать колтуны. Поэтому пришлось его каждый год летом стричь под львенка.
            Эту процедуру он ужасно не любил, но очень культурно вел себя до конца стрижки на сколько мог.
            Также не смогли мы приучить Персика вовремя к когтеточке, у нас тогда были
            старые кресла и он их царапал и мы не обращали внимание, мол не жалко.
            А то, что он потом будет царапать мягкую мебель (диваны и кресла) не подумали.
            Так, что так и прожили с Персиком с недорогой мягкой мебелю )))))
            <br />
            <br />
            В начале мы Персика кормили мясом. А корм или консерву он ел только иногда как
            вкусняшки. Так он прожил 6 лет. Затем при переезде в штаты пришлось его перевести на кошачьи
            премиальные корма, так как мясо там было бы очень дорого. И при возвращении домой не
            стали обратно переводить на мясо. Он его ел теперь наоборот изредка как деликатес.
            Рыбу он не любил, только тунца мог поесть. Мясо он любил только постное не жирное говяжье.
            Как-то дали попробовать ему мраморное мясо, но он его не захотел, то же самое стейки.
            Ни колбасу, ни котлеты он не любил, изредка мог съесть кусочек котлеты из бигмага ))))
            Молоко Персик не любил. Мог чуть-чуть поесть только йогурт. Чуть-чуть мог поесть оливки.
            Овощи, фрукты, каши, хлеб и т.д. он вообще не ел ))))
            <br />
            <br />
            Спать Персик любил отдельно. На своем месте. У него был матрас из Икеи. До этого
            он спал на пледе тоже Икеевском. Также любил спать на нашей кровати или диване днем.
            Но с людьми спать он не любил особо. Людей он не боялся. Немного боялся детей, если
            его сильно хватали. Ну а так он очень спокойный был по отношению к людям и другим животным.
            Не сломал, не уронил, не порвал, разгрыз ничего за свою жизнь (кроме кресел и диванов)))))
            <br />
            <br />
            Персик успел пожить и побывать в Балашихе, Москве, Нью-Джерси, Мытищах, Владимирской обл.
            Но он не очень любил ездить в машине долго. После перелета через Антлантику у него
            был стресс какое-то время. Также он не очень любил оставаться один дома. Иногда ему приходилось
            оставаться на 2-3 дня одному. Он очень возмущался долго потом ))))
            <br />
            <br />
            Персик был нашим сладким ребенком. Создавал уют дома. Встречал всегда дома. Будил рано утром.
            Приносил радость и счастье своим существованием. Мы всегда будем помнить и любить тебя, солнышко.
            Пусть земля будет тебе пухом, наш милый милый котик!
          </Typography>
          <Box
            mt={5}
            alignItems={'center'}
            sx={{display:{xs:"flex", md:"none"}}}
          >
            {/* SCROLL UP */}
            <Typography 
              sx={{
                width: "100%",
                height:"35%",
                fontSize: 12, 
                fontWeight: 700,
                color: "#ff8562",
                transform: 'rotate(270deg)',
                cursor: "pointer",
              }}
              onClick={() => scrollDownOrTop(top2)}
            >
              SCROLL UP
            </Typography>
            <CardMedia
              component="img"
              height="80%"
              src="https://static.tildacdn.com/tild3765-3135-4565-b861-383831366635/Layer_2_2.svg"
              alt="Cat's Pic 2"
            />
          </Box>
        </Stack>
      </Stack>
      <Typography ref={bottom}></Typography>
    </Box>
  );
};

export default Main;