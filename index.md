## Welcome the Network Data Analysis Group webpage

Networks are mathematical formalisms that capture relations within and between data sets. Over the past several decades, much progress has been made in explaining real-world phenomena in the biological, physical, and social sciences using network theory, and in particular, graph theory. The complexity of data has increased rapidly in recent years, partly because of the following reasons: 
1. It is now easier to produce large volumes of data, e.g. in social networks, and 
2. Technological progress has enabled better data capture and extraction, e.g. in biological networks. The objective of the growing field of Network Data Analysis is to devise methods for analyzing such complex network data. Some aspects of these methods are listed below.

Our research is supported by NSF-IIS grant 1422400 and NSF-DMS grant 1723003.

### Network metrics
A natural question to ask when comparing two networks is: are these networks the same, or are they different? The difference between two networks can be formally quantified by developing metrics on the collections of all networks. Understanding the behavior of such metrics is one of our ongoing projects. See the related papers [[1]](https://arxiv.org/abs/1708.04727), [[2]](https://arxiv.org/abs/1804.02820), and [[3]](https://arxiv.org/abs/1808.04337).


### Clustering networks
Clustering methods, in particular hierarchical clustering methods, can be very useful in exploratory data analysis. Classical hierarchical clustering reveals the presence of clusters across a range of scales for metric datasets (i.e. "well-behaved" datasets), from which researchers are often able to find hidden groupings and patterns. However, general network data tends to be more "wild." We are interested in being able to provide hierachical clustering schemes that simplify the visualization of even very general network data, while providing theoretical guarantees on the worst-case distortion that can occur from applying such clustering methods. See [1] and [2].

### Persistent Homology of Networks
An ongoing project in our group is to better understand the persistent homology of a general network. In addition to devising robust theoretical methods for producing persistence diagrams from networks, we are interested in using our methods to glean new insights into the structures of a wide range of network datasets. See the related works [1], [2], and [3].

### Zigzag Persistent Homology of Dynamic Networks
When studying flocking/swarming behaviors in animals one is interested in quantifying and comparing the dynamics of the clustering induced by the coalescence and disbanding of animals in different groups. Motivated by this, we study the problem of obtaining persistent homology based summaries of time-dependent metric data. Our research has produced the notions of formigrams, and distances between dynamic metric spaces, and dynamic graphs. Fot the interphase with the data anlysis part, we use concepts from zigzag persistent homology. Read more in https://research.math.osu.edu/networks/formigrams/.

### Zigzag Persistent Homology for Neural Data
We apply Zigzag Persistent Homology towards understanding the amount of information contained in the spike trains of hippocampal place cells. Previous work has established that simply knowing which groups of place cells fire together in an animal's hippocampus is sufficient to extract the global topology of the animal's physical environment. We model a system where collections of place cells group and ungroup according to short-term plasticity rules. We obtain the surprising result that in experiments with spurious firing, the accuracy of the extracted topological information decreases with the persistence (beyond a certain regime) of the cell groups. This suggests that synaptic transience, or forgetting, is a mechanism by which the brain counteracts the effects of spurious place cell activity. PLoS ONE link.

### Metric graph approximation of geodesic spaces
A standard result in metric geometry is that every compact geodesic metric space can be  approximated arbitrarily well by finite metric graphs in the Gromov-Hausdorff sense. It is well known that the  first Betti number of the approximating graphs may blow up as the approximation  gets finer.

In our work, given a compact geodesic metric $X$, we define a sequence $(\delta^X_n)_{n \geq 0}$ of non-negative real numbers by $$\delta^X_n:=\inf \{d_{GH}(X,G): G \text{ a finite metric graph, } \beta_1(G)\leq n \} .$$
 By construction, and the above result, this is a non-increasing sequence with limit $0$. We study this sequence and its rates of decay with $n$. We also identify a precise relationship between the sequence and the first Vietoris-Rips persistence barcode of $X$. Furthermore, we specifically analyze $\delta_0^X$  and find upper and lower bounds based on hyperbolicity and other metric invariants. As a consequence of the tools we develop, our work also provides a Gromov-Hausdorff stability result for the Reeb construction on geodesic metric spaces with respect to the function  given by distance to a reference point.

<a href="https://arxiv.org/abs/1809.05566">Arxiv link</a>.



Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/ndag/ndag.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
