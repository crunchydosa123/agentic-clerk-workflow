from helper_functions import insert_data, query_index, generate_embeddings
import uuid


random_uuid = uuid.uuid4()
random_uuid = str(random_uuid)


sample_text = "This is a sample document."
sample_text_embeddings = generate_embeddings(sample_text)
print(sample_text_embeddings)




insert_data(sample_text, sample_text_embeddings, random_uuid)
