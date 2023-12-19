import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../loginComponents/login.scss'
import Header from "../../components/Header";
const LoginComponents = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("1")
    const [confirmPassword, setConfirmPassword] = useState("2")
    const [name, setName] = useState("")
    const [hidden, setHidden] = useState(true)
    const navigate = useNavigate()
    const [err,setErr] = useState()
    const HandleSubmit = async () => {

        try {
            let token = await axios.post('https://erosennin.id.vn/api/users/register', {
                email,
                password,
                name
            })

            localStorage.setItem('token', token.data)
            navigate('/')
        } catch (error) {
            setErr(error.response.data)
            setHidden(false)
        }

    }

    return (
        <><Header/>
        <div className="login-container">
        <div className="login-main">
            <img className="login-main-img" src="https://img.freepik.com/free-photo/portrait-young-doctor-man-with-radiography_144627-21849.jpg?w=2000" />
            <div className="login-main-login">
                <div style={{ display: "flex", alignItems: "center", marginTop: "60px" }}>
                    <img className="img-login" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA21BMVEX///8YmtjqIi////0AldcAltcYmdoAlNgAk9cYmtcAlNQAk9UAltkAl9b//v/3yMmq1e3pABn63t/pEyGazOnL5e7i8fXpGinz+/rg7/rsUlpCp91quODv+PqAwuLl8/fA4O0zodhQrdt1u+C33e0Aj9jN5fL36unxubwmoNXU6vApntiKxeTP6PVXr9o/p9joAAWHweWz2uaWzuSZzOtVsNq+3fB5wN9ot9vup6jtaW7mJzJ5vuZqtuLnOkL20tTuhIrueYHqWmPnQU3wu8HzoaLvkpXtjY/68fHvHOStAAAXqklEQVR4nO1dC5uixtKGVDfQSBsmoy57FAV03CiM7MRsdnLOmMu5JPn/v+iraryAoIOz4szm832eZEdsoYvqrltXV2vaFVdcccUVV1xxxRVXXHHFFVdcccUVawCo/3me5yPwH0+DzeW/B7ze1H0YRP0wDOM4xv+n0eDBDXrea3fsHIBR8JAKwZiUUtcNfQ3JJeNSTx+C0VfNSD9IZhbjW7oIhmHk/uTMmiWB/9odfRn8YBBbnCgRyDNpmpaNbIzDWEjZskwTWUjf4HdW/Bj4XxUr2yhH7j/HTGYDknFLRA8d976n5Izvj/zevdt5iIRlM6k4Ku34cxc0aL9212sCPDc1FXkGcipKcK5ViE28NgqSSGxehJm63tfASOSf14ktQyjuhcOpjwxF+ioozLSFPx2GNGB1YbB46X0FfET6zGx2zZJ5LaaAN0eBpDhpxp23rkHgh5iRUuDWIvC0Cs5V/gg0L1hkUonFP7zpodpNbZIcXB+OTjJYaJ6OhkLRaKXdxvr3hQBvyBR9InmZgvMTRaPBht7bNOi6oY3ygrPErxKdNQBIIyMa7bBbc4BfEpAgfYZjDUZfdJfRyqKhag/fFoXYm1FqCUOwcPrFL38aMryTmX7Rmzo7IIhxdBl2cg5Z7yUkrngcvB02grZkpAHjohDc6PkqdZ9d3/6316Abk3bkyzdDIozv0ISxV0X97s3dZJGmafS0DGjE7XcX/ODHcZSm/Shxu3u891YktO7Gb4REb0BvnHVy3QF/spItzrk0DIfxVivtzAsCFnqd1G5x0yG3kUzzlVvwLsBVo+LxDVg4aI5ETBdSBNsrqLyT2OaZDyjI641Rx9mL6e430xVnjkEO4sZbdCyRjHJ8hgDvqbPIe3W1AVqKtDhxb3sBIJGZu8C5g06h7WQusLQ+9bKAzWhhO3TJcThDt5FxRazOZUFQ9WJH6Dx9ZS62NS/lqCTSrRGDnmFsEmNsFg86P03v7wN3mApOfqC0SHbA0sKxa0hTpEM3uJ9Pg844xE/IbxNl1c638FP2Bkj0FlwXTq4X0FH8McNkvr2E2tKNlMFqLjxvQSrdaUXuaBNsQ7bPk7hFfG51cqPSS4mLi9ckEWCwT+CYRhyL3Vy3si53Fy3ScikNasOKuqAVxas3ETZJ5HFOInkpyhs2eKEReAYADNEVLBA4IE5Yn6vkA0yERMHjUNBmUtFlNNzJsTQHu9+C18cZ7byiBeciPbK/nYNtGKIac3ZidQ8+DVDDsKNDYSdlGZl5LeinXOi2e74unwTokkYQ24AnaC5SIGe9Q68c4LOJ4mRwaNAB9GaoIqxO7tIoxpfCX8lj9Mm24luBosEcJ5Lc6Y0KwFg6BwmkdzSa4TS25rlrc5q38etImwinlLmbUQChIXTxXjsWSoIoOrZcgVwUwpBxvsUEH8OjM/T3VKBaQwKXuSuu1I1WlQzJ/8p/JvQLAd7WWebfwtJEtl7cCkcNRkM0yplZ/gwvDKpb79aZdiw/ZI6N0R6I8+8BIi6EnF9YZQCkOCJFPt7kWgaKnerWo0F/XuxgLxpUSyTw0ZQ188IGRmTvRJdWijhGcUjmezbTBfoXFXpwOo4tLvuFbyDlaGs/TatCTuhsGmHeE4MJGkTWstSwScCITMaCVJwiyWI/xobfdyM0rW1ufSpch4XJLEe2+kF5sHqxIVp5Bx9NJ0cX/LLrcAO0GI3CkBzKillIVo9k8mmSjPfG72icTIbC4naFlzs0DT4utkaDz6me4w1hivZVwdJoa6Gh28F+O2QVF1m7IiFtZWu2Xd2xoxKJU7Rt4+KgdtH3sC6o91G66UZa6PQIjRF7Ty8D2uFscWxwgb/gssQbHKa6VTAcANBAlZdTihCg+ckLMwi6ODHTfVqmNl8VeVG+16O8K/EmQgqD4qUAvQz7YtE3iGRBFRJcpsuHfQqGpigq+PbP//znz3mbB8CPWXHO4cUHrlt71jY9U5ZeYVMgs0MW9RskXM8rsQwRKw6sD/+6eXd786/vChdXzmJfZWSvqwA0evUSYxtDmrmlhWtPUpj7Tg5O11Xhwj/effPNN+9ufyk0GvD+Pu9dU5clxg5o7l+GiXP0Cvl071ljHLhlCs2n/Odfb75R+Phr/uoT7+/zcILq4knbwxSdjILX0RhgjC9zX6zBExcVFLJCP79fU3jzc/7qUyUP+T4PlfzhF4kR++SH70s1+JHrsrPXU1gUNcGGwtsChStW4qHLdZ7sPxcCVMK8eUcR6AXv6WMti1HLp/2eLuxF/mMlD3F+pfsPGXLdKUcuAN390lxvALDgwuyUBkug5MAeD1c4ANd/fv/b77//+50i8N27f//++2/ftzf3k5+0PaBvjeq29OSOWVJSTaCHUtt+X75M7u/+04fOLPvjwy83t7e3GYFKnN7e3vySKQ1IS0ZN2aZZPwPnBz8WJDkP0LfhVb5ajI74vnHScXTlBcF/br/ZByoNxUUvNPenHIVmRFW8EY1F1vwwXcjqpwykUerqxJLKzf32pkQgKY3/UpuRKJkv+BLloGo00mRv3Dj12YGRMmGGERaFKdybjopt/6+Swts/qNHc2mc9GWjMraKQhilrOpFxgpK0JPsIHs5PudfXHndCehs/V1P4P/xqFAqx98LIPpPVAas+Ujip+uJsAFL3PKl8+kqWFDIaqw4F6b+7eVdB4cfvyHwwDWdvcKOu4AutCmT94jOaFKdtCPUqQU4ge3wvEoV+v6Gk6W8fyyTe/E7foI4rmi/gSbTODjAKdRLq4kZz+zwkwzqQj4devllk78TamJJ/3N7c3GwFqvrwB8UY55ZhOAVyUOuhh19tuoCHJnGr2YlIjmjJjFyDlt4L4SIKDOpyqP5u//rrr3+sSbz9Ez8oRkBi6oZd6LJnGgYvWxTZTWgilmMlZwVqOHN44DtS1Pxz7gJoK64Lvv1ctto8HPQF+Q84Cw1DHLQ+h2aFG3pWoDipsBjXcB01KHNhbRqmO+FXtrwn+xEtbY5K50hoFB9RjuucFThKWod9NORI0UkFHKZOuLlS4iHFl3RRCP6mjmHEh6Ul+ab9Q1+eAz6Kvv2IWg5TSxdmYQ2lQyvx7no56sPaMv34Yf0trbCim5Rb/OhYx2MVpHXjJkVNTxh6eFgdkbbU5X3ugi8N3RCbFYo/ldK4+W39La1HFBXM3DYErzTYNjcM8XZNOvpTG937Ix3wY8PIL2eC1qElqu2axR8fbz5+/DP71NYWaGbmF9KABI8oLQ3kgZ6Ibk+PNPhCwOSQTbxpEKB+MwvCkabazkT569v//rX5ZmAZlOaQu90jCp7W5JjNAijq2DNrlF8CWFaFFwpAk0ug3t/xZY4D2zDLrwXGti50OzfioINXzHJ8pgCy2w5oy3NA2YXHV7mIZ3l/CFCcCOTr414CCqwYZR+6u5VTmLRIFLePdx/fMau2i88CGPIDfs22BfgxynsrF6mCJeXYOGnBW/D6lCPVyo+H4E4nofRMD1yOJkeTFB7y3LZoQxfFp2h1cwkLOPrQ+hTTbZKXNtUpt2+XVgIAgY2sZs8tL4HrGKzJDKKxmufP5BpMUILo+bQhcFuUZrnNkfYS2utktHaaE7RA6HuLygdvXgqHnxNIYWs/2l2Ge0dJeMHOy8EpRsYLm9HbgUlKfpa0J9uZiQQST2WNGEzQKgf8zwmi8Nl1ynY283IMAeiFlPhj8NkwidG0NoSM5zv6YEJp1K06K/XdxilEIVIja1eRaHfyynxsc6GyalVybT4pHEhN0KCtcWOlkRukkCSNeVzSZO1U6onOd34WiZIQXdss59kOg5wgggclV5d19nar2Poh9+0MIAp5DQqVRKBMyihvpXtubAnaVkPbDHctvQElXbbqxUEzChvW+LUsCtC6aMsICrW1t5dQTiwcIw3ymVHrGSqDmj1YHoyEnQWKwrr3n88kMkxMCoGjocOKVl8gSMrG91pNnNKDF0CNkbpLeOD3KaW9NcxPr9TgP+1aALFEF7z+HicY15MELwUlYcioZjCvDfCInoZh7RL5tV5LZztqYBTRhkXr8YQdzpEsmIRnx1xW5JQcAmQZmmigrd0d0D5zp59T80JNwVMSK6FPSRIn9fk0jNDhORwIK/dHm8a0N8Eaqww96FnGLtbrPVgUbIzr6NctPHy+3ui+PXTCWyet4PmRjSPVDLtkr0XOLgZyHzpkfEenbRjGYW6Epzz/ZHxyhPXDKT8AbWmTmYZspGAnC7KL3vAOpZC0j7vTZfxg6bJ6TeNcoFWT0yKyAPepMnBCdOr5Q7bz6Seyb3QzPDni0uG606BJo9EqIWWVnybLwH+g3FPpZDEeVPK0uxBH6PDUxIo2ilLdaXZ5jVbx5akb5gDmoaDdafIzKg5v6Kg933H35GUy0NA8sBteycdHsBOlNYAXRMZ6v16yVDu/pHyRYUIhb/mC39UHwAC9/FMnohtahmBClSNwOO25tKKX6bQO048GjL8c6BZxIU/KaYERChrDsgajYOZk+0XN+KURz0hSblmzJPZIaJygcuFeOMKU4x6ZOK4wuWQxesYvW6mmZQDr4LaqM4HMJn6CNKOAMF+nseOEdAeDL6izg5L82LLJmZBIEvp1/QtaZ8i0fP7qS5/9+GzI/RzotmjxpG4nlxa5AmdKLfBxPDSfsA9eX9T30DyulxKlXv5o19JFeIF9egmjlPJ6JOLEqbF1sLBqfLjIBC2JOEmzklSB8upaNXeSjZ39dKAKUNGveeASgm5lWbCs2dxq2DfcPolsw3GdVwlaaj4TXkWDzh33BeMOp+oDjNki6nTJm8yyUfI3o3SsC6SXatkeSFlHJbb92GBHrEjouQNhcVVfQUrJVWlFXbI7Pp6uy2XmWvtSbzaAsesXJViwWvIDKTywXEYj043QAKAtW1ZLhP0BYhWFsmVy3WCtdOJNPvUXLmwFcUILjhfahEjbVuskRACE0qqOE0KwMGyJzr9lRknwnipLKXj+3F1Ji+vCiuVdy7K2MWVKA2GX2oOoHlbLN4iMihA50tERFo45KftJt+o23UdBDpbbc4W18XcTblxwS/eSvMQ6bpprVmxz6SWctmfLfufwzv3RA+fd+VO3y9eDhfLI2eW2O3uUhlgnz3Nkl7Zo9caSGQYXD/OjPx/x1Jux2AuZGuZqG8sltP0Grl1zhw66k5RukQlGIN4wZnArXj43jUfWzOvfpRBnGlC5vpcsHkGJtEb/eR4CxTetZeZNgDd9bDlCt9LnFsoJs1bHC7ylqRinsnLCi+7mDixRWAE9ANC6UqJ7P0Z7pbOKLZx/rD+p4x3CpMVXywFTJQwApffltuatgcNPyPLGkhJgHqJu4dJmHIWhg/yrWRMRXNuyLFuJ4veGOJ6L1QTQ3Ra8lgEOCVURlpwx5OUp9RB9N3FVGTRyMoW4cNFoABdnhllDKZIaDzqrweDJJXuz/lxqQyadUBXiGJWTCzgVRdCeTr0VXOBJZAcfKLjRKIA8bhk3X7+Rwk/lag0XQZcsm37TWliViuINppQeAXRo+0FpI/Z5nwELpjJzGnzGsacP6OlNZihp2jCrZ9boM47Ao+JrdpOpEaTqX7PsHvgheXLNeW0JZcaHr1pzvydMJDFpZLNVG5ZoGzpHi4c1DoA5MlHYTcT4QEsoE5wf97KaB8ylSrZogMIxiWr52gRiR7qUAGIuzjxZqHIN2vb6/Gj5t8sA5rGkHL0zxmrxZc1DhrZM/PocVOjNqGqUmMCZBE4bsjqZzmz0BjhIAKrTqjKfznM78B4pW4xHb+hEjyzNl6WVscGTb9alwqy6/fB26NOURy7RD+cPX1i7GSjfjRLCpd1gjuVLAFovpGRmJupEmY7cB2cgjXgz7L16mesiyJMfqnN/qETwi/sG00jVUZbD16/jXQHoxpQy49irF05H6K4kUww8y3xuAl5Ce2MMKV9AI0B3Qatrgp/nhIVmgLMxopONDE5RQ+2UrAtvklq01MbNxVubgXuAIJKOOixGDLvtWjMSG3WH65wwGb2hUy2qgUQFUYvKyhvMTodT73CxWS07AcObPqS2Kr0vrbdPXwacUS2mDiVjpojc+aEgKVWbdyPBs3MGWOvTmxUwe6BujoYxLRKSf8ctm44IGPnehlK11juiEwVsS52gZ2Cr2bDqmI83DPCCR5EdNUaSh9m2nPWjaDUej1dR1J8J294ejMiteBy80SOejsMPxjPL5NsDHbN8C045F9tTHrlpxcOv9YhHJUjm7iCWNluf6ZE/zVLSOZ3xQE3Tr5B9BfQCdxyFsbQQrVaL/pFxGI3d4FWDTOcDZC6D//79/H5KuH8/7/nqZL23f9jh3x9/Hxb89W0lPjz/y68FH6iwYwkfv3/tfp0PH6oqyn1zc6XwK8L/Awpv32XISFt/+FtR+I81MgL/k334z393LTZeYNEAA9jktBX1CmzOO84+5P6FQpPivWB9XGITRt7mlt8pJt58u3f93l1j8r64QANab5IME3cvzRL8oDN8cNeLEl23gPWGCn+6HD4sp7uQzWjToNED57+7LVK4RufOZAqWFf7o7xgG9wtuccZMXnDeRw8xuhycrUMWicV2MO9UfrWXzNC7ckwrXG5C+8Hdup0txs2tCldTSEWa1w6SYdBJiJvnJ9JZn28ocyuMgWDCWB8YSEcndHjO48h2oMxntPKkzke0N4taU2frhtmzxtytoxRujmtc58wCPLZUhxzl7LN1eWVw7YxmlaLPZj3oWOgwSpEl7Eva2BS0sheg7ijtbDR3mXqG+p8TNRVwPEZhGIaxbqv6T1l+z7KlC+xfGqWqKI05VLy9pwJDOgujSNAiNr6OyQqxwB/KBf4xcLWeIsTEJjFtiF6XEVQUxnEY0mlJh0q4Nklh7CFGE9pFKSnrFXo2Zc8uiAG9cYsO/qNAE4Q4cGVKx5L7y5a1LXw5ojLh6018dK4pjylN0/9BIKuzAzC6jm5YI3xIECNjS1XOm6dwBkqM06mkqmAnPFC1XJpUJOSp4qOgSTfhSCCdLkrUeu+3K4RU5nldCH1uG4YI/Uw1ID/XNc4UhSqalUhdxA25NUco3Ox8pK0KdExaVnx1q+seibe+KoCq8wo5kaMwYYZhbtfMu9b6nNo1hRqdnSXqbBh7EWpQqP1Ie1t87T3ThR1slfO9o/KYFd2l01q0AoWRo8vd8TTqyJdVnkKIjFpJ5i9CHQrvbVUaOEA5I/0thR7tQnG1kX6g0HOOwpnI122AhBuqIApSiMMfscB35zSVTVeHwjnOktaI9n/ls0IhlLqz1EaifAyQwo7CNgqSXOVdIHW5oVCn7W0OBSZrpJi/CHUonJi6YfpApU5zBXmp7ov5A+31IgYdHaWpkR/IVM9TbcpTFJIaoQylOpXPXoTnKQT4hLIkBW0UI6G7qlwuzyoQ9yXNoaMUjiXpnk0TOkrPIYK7W5umZr2xF+GottCUJU5nkXJU7hCReZUxkY6mNISkwjIdEpT5golQonDSQpq2BUweN+nkikKhwuUN1tY/RqH608vqJvXWGzENoWxrmMd0ld68T8Vq1ufCj8b98Wam5ij0QqkKn1Abb4xWTXayoJKlvtajWx3bt9kYhXGn82PyNGO0ppYxIEJidHvhBu6KrDZJZxoC7V9HYZMuf5oMBTf4LDurO08hVQ5EIsLkp0kSowUush0BG41Pte542lQy0TG7lDOerSZtNpqM1GKwtCxTLVqsxQ5EyBVBG0edzEzPupqjkA5MULa6RXsw0fLL6qFt9eEYDbzGapjW8J5ydn8vZuQcCOVgyM12Ge8T24kMuZlRBQph0NqcKo9UfV47yuaaQi9V1kMzJB6i0FIrZjjBHCt2d5LSG0vTIfHA7NXGMUfDsoOUEd0OW2yd/54ljU2NrTaAKxg1MaQVbt5B1zKcOxroMKeH2c3s9DhAoRv2M0TjScHmhHmSxkL0h8X169Fyoa7e76728NeznPzw3AXaNvFqsp1wc3xIdjwpzAfY+rERJh6IYkAexW/oBOBSzEEtRanVJ8i3hFKTdu5+xbsfyX/4Inz38ebm9ubjPoV/I/z1vcLfaEXmiiuuuOKKK6644oorrrjiiiuuuOKKK6644oorrrjiiiuuuOKKK6644opT8H8eI6fJ5UBBvgAAAABJRU5ErkJggg==" />
                    <p style={{ fontWeight: "bold", fontSize: "50px" }}>AI APP</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", marginTop: "50px", marginBottom: "10px", backgroundColor: "#fff", borderRadius: "3px", border: "1px solid gray" }}>
                    <p style={{ fontWeight: "bold", fontSize: "30px", marginTop: "10px" }}>LOGIN</p>
                    <div className="div-input"><input className="input-login" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}></input></div>
                    <div className="div-input"><input className="input-login" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input></div>
                    <div className="div-input"><input className="input-login" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input></div>
                    <div className="div-input"><input className="input-login" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}></input></div>
                    <div onClick={HandleSubmit} style={hidden?{marginBottom: "80px",  marginTop: "10px" }:{ marginTop: "10px" }}><input style={{ width: "90%", height: "35px", backgroundColor: "black", color: "#fff" }} type="button" placeholder="Email" value="REGISTER" disabled={password === confirmPassword ? false : true}></input></div>
                    <p className={hidden ? 'hidden' : ''} style={{ marginBottom: "50px", color: 'red', fontWeight: "bold", marginTop: "10px" }}>{err?err:'Username or password is incorrect'}</p>

                </div>
            </div>
        </div>
    </div></>
    )
}
export default LoginComponents