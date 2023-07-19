<script>
  export let id, author, content;
</script>

<div class="post-card">
  <h4>{author}</h4>
  <p>{content}</p>
  <img src={"https://source.unsplash.com/random/?beach," + id} alt="" />
</div>
