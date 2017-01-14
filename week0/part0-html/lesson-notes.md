*These were my teaching notes I used during the workshop - they aren't comprehensive!*
# HTML Crash Course

```
<!DOCTYPE>
<html>
<head>
<body>
<title>
```
and put Field 2017 in the body

## Headers and paragraphs
- h1 ... h6
- p
- br
- comments

```
<h1>Field 2017</h1>
<h2>Stand with Tony!</h2>
<p>
    Join Dr. Tony Field's campaign to become DoCSoc President in 2017!
</p>

<br />

<h2>Meet Tony</h2>
<!-- TODO: PICTURE OF TONY -->
<p>
    Winner of multiple teaching awards, including
    the <em>Faculty Award for Excellence in Engineering Education</em>, as well
    as being the instructor of the pioneering Haskell course, Tony is recognised
    as a fantastic lecturer!
</p>

<br />
<!-- TODO: MANIFESTO -->

<!-- SIGNUP FORM -->
```

## Images and links
- Download images into folder
- `<img src="images/tony.jpg" alt="Tony Field" />`
- `<img src="images/crowd.jpg" alt="A crowd" />`
- `<a href="http://wp.doc.ic.ac.uk/ajf/">`

## Lists
```
<h2>The Vision</h2>
<h3>Issues</h3>
<!-- Put a list here-->
<ul>
    <li>Bar nights need to be better</li>
    <li>Digests need to be better</li>
    <li>Students are still paying for lunch</li>
</ul>
<h3>The Solutions</h3>
<!-- Put a list here-->
<ol>
    <li>Make bar nights better!</li>
    <li>Make Digests better</li>
    <li>Get more money</li>
</ol>
```

## Inline elements
- Bold: `<strong>`
- Italic: `<em>`
- Code: `<code>elections2017 :: TonyFieldAsPresident -> DoCSoc -> GreatDoCSoc</code>`

## Form
- `<form>` and attributes
  - `action` is where to send the information to
  - `method` is the HTTP method to use to send the form
- `<input type="xyz">`
- `<label>` and `name="xyz"`

```
<h2>Join the campaign team!</h2>
<p>Give us your details</p>
<!-- Put a form here-->
<form action="go.php" method="post">
    <label for="name">Name:</label> <input type="text" name="name"/> <br />
    <label for="email">Email:</label> <input type="text" name="email"/><br />
    <label for="phone">Phone number:</label> <input type="text" name="phone"/><br />
    <label for="password">What is your PIN number?</label> <input type="password" name="password"/><br />
    <label for="undergrad">Are you an undergraduate?</label> <input type="radio" name="undergrad"/>Yes
    <input type="radio" name="undergrad"/>No <br />
    <input type="checkbox" name="terms"/> <label for="terms">I accept the terms and conditions.</label>
    <br />
    <input type="submit" name="submit" value="Submit" />
</form>
```

## Semantics
- `<div>` defines a distinct area of the web page
- `id` attribute - unique for each `<div>`

- `<div id="about">`, `<div id="manifesto">` and `<div id="signup">`

## Navbar
```
<nav>
    <a href="#about">About Tony</a>
    <a href="#manifesto">Tony's Vision</a>
    <a href="#signup">Get involved!</a>
</nav>
```

## Other stuff
- Download DoCSoc logo
- Favicon `<link rel="icon" href="favicon.png">`
- Charset `<meta charset="utf-8" />`
