from manim import * # type: ignore

class text(Scene):
    def construct(self):
        t1 = Text("Never gonna ")
        t2 = Text("give you up")
        t3 = Text("Never gonna let you down")
        
        g = VGroup(t1, t2)
        g.arrange(DOWN, aligned_edge=LEFT)
        
        self.play(Write(t1))
        self.play(Write(t2))
        self.wait()
        self.play(g.animate.arrange())