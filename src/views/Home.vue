<template>
  <h1>Home Page</h1>
  <div class="container">
    <div class="innerContainer">
      <div>
        <h2>Add Post</h2>
        <form class="login" @submit.prevent="addPost">
          <label>Post content</label>
          <input
            required
            v-model="text"
            type="text"
            placeholder="Write whats on your mind..."
            autocomplete
          />
          <div>{{ feedback }}</div>
          <hr />
          <input type="submit" value="Publish Post" />
        </form>
      </div>
    </div>
    <div class="innerContainer">
      <div><h2>Today's Feed</h2></div>
      <div class="row">
        <div class="column">
          <div class="card">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            perspiciatis illum libero cupiditate ducimus ut, quasi nam
            doloremque! Culpa inventore deserunt quidem magnam iste nobis harum
            quisquam commodi aliquid laborum.
            <small class="date">Posted on: 12/12/2021</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.innerContainer {
  float: left;
  width: 50%;
}
.container:after {
  content: '';
  display: table;
  clear: both;
}
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 50%;
  padding: 0 10px;
}

.row {
  margin: 0 -5px;
}

.row:after {
  content: '';
  display: table;
  clear: both;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  position: relative;
}

.card .date {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #3677b3;
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 350px) {
  .innerContainer {
    width: 100%;
    display: block;
    float: none;
  }
}

input[type='text'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type='submit'] {
  width: 100%;
  background-color: #3677b3;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type='submit']:hover {
  background-color: #3b5ab1;
}
</style>
