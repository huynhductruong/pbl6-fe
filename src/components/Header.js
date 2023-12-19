import react, { useEffect, useState } from 'react'
import '../components/components.scss'
import UserLogin from './UserLogin';
import authorization from '../authorization';
const Header = (props) => {
    const [name, setName] = useState(null)
    const [imagePreview, setImagePreview] = useState(null);
    useEffect(()=>
    {
        const Author = async ()=>
        {
            const data = await authorization()
        
            setName(data?.name?data.name:null)
            setImagePreview(data?.image?data.image:null)

        }
        Author()
    },[])
    
    
    return (
        <div className='container'>
            <div className='header'>
                <div className='right-header'>

                    <a href='/'>                    <img className='right-header-img' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQPBhATDxAVFRURFRUVEBgXFRUXGRYVFxYWFxUXFxcYHiggGRsmHxUVITIhJykrLi4uGSAzOTMtNygtLjcBCgoKDg0OGxAQGysmICItLSsyOCsrNS0tKysyLS0tNS0tKy83NS0tLS01LzUtLzAwNS0tLTUtLS04LS0tKy01Lf/AABEIAHwBlQMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQEDCAL/xABJEAABAwIEAQcIBgYHCQAAAAABAAIDBBEFBhIhMQciQVFhcZETFDJzgaGxsiNCUoKSwSU1YnKz0QgVJDM2k9ImNDdTg6LC4fD/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAnEQEAAgEEAgICAQUAAAAAAAAAAQIDBBEhMRJBE3FRgTMiIzJCYf/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEWHX17YWb7noCje9aRvaeHJnZmL4fIGjnEDvNlEq/G5C0kvDGjjuGgd7jwUSr81UzXc6oDz+xqk97bj3rBOv3nbHWZU2zxC0JMVhad5mfiB+C6/wCvKe/9+zxVNzZ2gvsyU/dYPi5Yrs7Rf8mXxZ/NdjUaif8ARVOqn0vOLFIXnmzRn7zb+F1lh1xsVQDc307jzhI3vYD8pK2WH5jZqHm9UAegayw/hda6lGqyR/nRyNVPuF3Iq7wzOs0cgFQBI3pNtLx+R8FOsOr2VFKJInBzT4g9II6CtGLPTJ00Y81MnTKREVy0REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREHRVziOnc4/VHv6FXmZ8wCno3Sv5znHTG29tTjwHYABcnqHXZS7NkunD2j7TxfwJVK8odSXYnEzobFqHe57gT4MavN1H93PGOeo5ZNRkmOGixTFJaqbVO8u6hwa3sa3gPj1krEjjc+QNY1znHZrWguJ7gNyvklb/IDrZug/dl/hOWm0xjpMxHTBWPK3LTvwuoHGln/yZP8ASul+HzAb08w/6T/5K5MWqxHA973Waxpc47mwAuTYblRlmZ6V8lm1AueGoPYPFwA96x11eS3MVWTSI6Vo4793FdblZ2M4VHUxkSNs76rx6TT39I7D/wC1W9fSugq3xv4sNuwjiCOwixWrDnjJ9u1mJ6ZuEY6+neA4l8X1mncgdbOo9nA+9Wnk7HfN8RYQ68U2kO6rOtpf7PhdUqVNcpyl2DNB+o57R3XDh8xUNRXwmMle0cn9ExeO4ejhwXKw8HlL8JgceLomE95aCVmLbE7xu9aJ3jcREXXRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBo83xXwm/2HA+O35qk+UCL+0wSdbHMPe12oe558Ff2JU/laCRn2mkDv6PfZUpnGlMmDP250Lg+3YLtf7iT91ednjw1Fb/nhh1Uc/aAXW6yTJpzPCf2Zf4bloS5bbKTv9oYu6T+G5aM38dvplrG3Ke5kmvgtT6mT5CqmI2VnY6/9DVPqpPlKrC+yzaHis/aUTunuU6syYG3UbmNzo79YAa5vgHgexaTPcY86gd0ua5p+6QR85WxyUf0M/1z/kiWuz2efT90n/go4421E7f9Rj+RFyp1laAtwWIW3eXOH3nEN9wHioPDEZJmsbxeQ0d52VwZOw4SY1TxtHMjsT+5GBb3ho9qv1PO1I9y7l52pHuVt4fB5OhjZ9hjW/hAH5LIXAXK2w9eOBFiYvMY8Knew2cyKRzTx3a0kbd4VBYLyh47XFwpLTFgDnhkER0h3Am9uo+CD0Qioh3KXjOHztOI0YLCbc+F0V+xsjSW39hVs5OzVDiuEianJFjplY70o38dLuvrBHEIN8iIgIq45Zc2VWGU1GaORrDM+QP1Ma+4a1pHpcOJX3yT8oBxOmdDVOaKqK7tgGiWP7TR1i9iB2HpQWIirzljzTU4Zh1K+je1jpZXNfdjX3AYSNncN1J8j4jJV5Ro55yDJNE17yAACT2DYIN4iIgIq0xysxkcpMTKdh8yLo+DGGMxbeVdI8jU1451hfoFuJVloCIiAiIgItFnDGDSYQXRm0j3Bse19+JNu4FRnLGbp5MZjjqXgsk5o5rRZx9E3A6eHtVVs1a28ZUX1FK3ik9rDRcdChGT8wT1ONujmeC0McQNLRuHADcDtUrZIrMRPtO+SK2is+04RcLlTWCIiAiIgIiICIiAiIgIiICIiAiIgKts4UHkcVdtzJgXDq32e3/7rVkrT5nwrzrDHNA57OdH3jiPaNvBZ9Ti+SnHcKc+Pzpx28z4tRmnxB8Z4A3Yeth3afDbvBWTlQ/p+Luk+RykmaMKM9Ndo+livYdJH1md/SO0W6VEMDrGwYrHJJfSNQNhci7SL29qqrf5MU/nZ59eYT7FgX4XO1ouXRvDQOJJaQAFAosDqXOA8g4drrNA7ySpQc1U323/AOW5fLs1U9vSee6M/nYLPi+XHG0VRr5x6Z+F0Qp8PZGDe1y4/acTckdnR3AKH5vrRLimlpuIRp++Td9u7Yd4KyMVzW6SMtp2lgOxc62q37IGze+5PctFRUjpqlrGDd3gB0uPYFfhxTWZvdKlJiZtZu8o0OqodM4bM5sfa8jc+wH/ALuxXjybYXoo3zuG8vNZ+4DufafgoFlbAvLVUVPECGj0j1NG7nHtPxKu2mgEdO1jBZrAGtHUBsFLFHyXm89ek9JWcmScs9RxDtREWx6bAx/9RVXqZfkcqY/o4frKu9TB8z1c+P8A6iqvUy/I5eeuRzNtNhVXUuq3PAljiazSwv3aXE3tw4hB6HxnDI6vC5YJ2hzJWlrgfcR1EGxB6wqH5D6802cKqMu+j83mMp6PoHts/wAC/wDEpFnDlphdhckeHMkMkjS0SyNDGsvsSATqc7q2AuunkgyJIMIq6ipaYzVwPgpw7ZwjeOdIekXIba+9hfpQaylxOuzNjc2iuNHSRWIAeW2aSQxpDXAyPIBJubDwX3NiVZlnHYPKVxrKOa+oF5dZrS0PsHOcWPAcCLGzt9lEsq4XQsxqamx0SQuYdLXBxa1kjSQ5r7Amx2Idw8QpjDlvLb8WhpoqmV753aWlkjiwEjmhz9Om54DtKDY/0iXh1BhpG4L5iD1gsZZQGvwWowmnwzEqZx0zxRSsf9iYtu+NwHFjhe1+ILh0Kd/0g4RHheGMF7MdK0X42DGAX8FNcr4PFXcllFT1DdTJaSEHrB0Atc09DgbEHsQVryqZnjxXJOHTxbHy72zM6Y5BEbtPZ0g9IIUrhzT/AFVyM0EzAHSvijjgB4a3Am57A1rj22t0qmM14BNhmMyU09+aQ5h30yMNwyQdF7XB6jcKyszYLJVch+GSRNLjStjleBuTHoexxA6bage4FBr8Byhi+M0HnkmJPjElzDqklGq22prIyGxt22sO2y2vJzm+spM3HC8Ue6Qlxjjc86nMkA1N+k4vY4cCbncdoWZyd8qNDBlGCCskMUlMwR/3cjxI1uzXNLAdyLXBtvdRrL0zsc5ZBVwxkRRPbKSRbTHEzTHq6nOIG3aeooNvmjFZ2cuVNC2olbEZKUOjEjww3bc3YDY3t1Ls5aM1VMWYqehhqHU0T2RvmlaS0nykjmlxc3nBjA0khp33WBm3/j/S+spPlKlfKVieESY1FSYq1we1mtszQ8eS1Gwa5zN7GxNiC0WubbII/h2TatpZLg+YfLuu3W0yFw3I1O0l7musN7OHRxUl5XM6y4XhEMVO7+0VANn6QdDGAB7w3hqJIAHaepVRnPCaCgMU2EYo6WQu9Frml0bbE6hJGBaxAFjvupByvYdUTZawqvnadfm7Y6vawY94a5rnD6oJLh3kBBlwZDxCTDxUOxwtqnDWGGeTYnfQZBJse5thwUs5Hs6S4jRzwVhvUUpF3WAL2EltzbbUC0gkcdioJhGDZamwpkktRJC/SPKRvldra7pAAadQ6i291NeTuhwumw2pr8MfKQGvilEjiSNLg5oLSNibNI7HLkztG7kztG7nPVUarMLKePfRZg9Y+1/Dm+BTPmFebTU0kOwDGxg9To7aD32+VajCKWpqsRfLT7yNOtzrtFi8u4avatpimEYlJRu84Jexl3kF8Z9EHcAb3tdebvN4tO08vJmZvW1vGeev0sDB64VGFxyj67QT2Hg4eN1AeT3/ABLJ6t/zNWx5NMRvDLA48PpI+47OHjY+1a7k9/xLJ6t/zNV0385xyvnJ5zjssxERbXoCIiAiIgIiICIiAiIgIiICIiAiIgLgrlEEEzzl+xNTC31wHzj8/HrVQZmwS5dNC3jvK0e97R8R7etemXC43VeZryi6OQy0rbtO7mDi3taOkdnQsWXFalvkp+2HPhms+dP28/LhTbEsuxSyFzbxuPHSAWk9N27WPdZa9uUudvPt2M397lKNTjmOVEZqflG4YnPlDWNLnONmgdJU5y/gpiaGNGuWQgOtvc9DW9nx4rJwTAQyUMp43Pkftfi4jq6mt8B1q2so5WbSM8pLZ0xHeGA9De3rKhNpzTtXpHxtqJ8a8V9yyspYAKKgs6xkfvKfg0dg+N1vlwuVsrWKxtD1aUilYrHQiIpJOueESQOY8Xa8Frh1gixHvUTHJhhVv9xb+OX/AFqYIgjuG5Fw6mnD4aGEOb6Li3WQesF9yD2qQ2XKINDmHJ1FiLgaulY9wFg8amPt1a2EOt2XXTgWQ8PoZw+mpGNeOD3F0jh+66Qkt9ikiINRmDLVLiLIxWQCURkmO5cLF1gfRI6gs+gomU9FHFC3THE0MjbcnS0CwFzushEGnzBlakxDyfnlO2Ux30ElwIva4u0g22G3Ys7DsPjpqBkMLA2ONuljdyA3q33WUiCIYjyZYXUVJkfRNDnG7vJvliBJ4nTG4C/sUgwbBYKKl8nSQMiZe5DBa56yeJPaVnog0lVlKklx1tZJTg1DC0tk1PuCz0dgbbdy7MdyxSV7R55TRylos1zhzmj9l4s4ewrbogiWF8muGU1SJIqJpc0gtMj5JdJG4IEjiAe1SmeBskLmPaHNcLOa4Agg8QQeIXYiCGS8leFOqNZogDe9myTNb+Brw0Dsst/Hl6mZhfm8cDGQ7HQwaBcG9zptc3W0RcmN3JjfthYZhMVKxwgjDQ43duTc8OJJWYRcLlEiIjiCIiI2hqqHLtPBUiSGLS4XAIc/geIsTZfWH4DBT1JfDFpcQQTqcdibniexbNFzwrHpyKVj0IiKSQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg1eIZfp6h15YWkni4c134m2JWA3JNGHX8k498j/wCakaKE46TzMK5xUmd5iGLQ4dFBHaGNrB06QBfvPErKRFKI26TiIjoREXXRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k='></img>
</a>
                    <a href='diagnosis' className='header-task'>Diagnosis</a>

                </div>
                <div className={name ? 'hidden' : 'left-header'}>
                    <a href='/login' className='header-btn' style={{ color: 'rgb(99, 96, 96)', backgroundColor: 'white' }}>Log in</a>
                    <a href='/register' className='header-btn sign-up' style={{ color: '#fff', backgroundColor: 'rgb(99, 96, 96)' }}>Sign up</a>
                </div>
                <div className={name ? 'left-header' : 'hidden'} >

                    <UserLogin name = {name} image={imagePreview}/>
                </div>

            </div>

        </div>
    )
}
export default Header