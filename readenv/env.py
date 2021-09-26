import os

print (os.environ["kafka-connect-url"])

kafkaurl = os.environ["kafka-connect-url"]


#input file
fin = open("config.env.js", "rt")
#output file to write the result to
fout = open("config.js", "wt")
#for each line in the input file
for line in fin:
    #read replace the string and write to output file
    fout.write(line.replace('someurl', kafkaurl))
#close input and output files
fin.close()
fout.close()