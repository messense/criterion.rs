(function() {var implementors = {};
implementors["criterion"] = [{"text":"impl&lt;'a, 'b, A, M&gt; Send for AsyncBencher&lt;'a, 'b, A, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as Measurement&gt;::Value: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, M&gt; Send for Bencher&lt;'a, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as Measurement&gt;::Value: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, M&gt; !Send for BenchmarkGroup&lt;'a, M&gt;","synthetic":true,"types":[]},{"text":"impl Send for BenchmarkId","synthetic":true,"types":[]},{"text":"impl&lt;M&nbsp;=&nbsp;WallTime&gt; !Send for Criterion&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl Send for PlotConfiguration","synthetic":true,"types":[]},{"text":"impl Send for BatchSize","synthetic":true,"types":[]},{"text":"impl Send for Baseline","synthetic":true,"types":[]},{"text":"impl Send for PlottingBackend","synthetic":true,"types":[]},{"text":"impl Send for Throughput","synthetic":true,"types":[]},{"text":"impl Send for AxisScale","synthetic":true,"types":[]},{"text":"impl Send for SamplingMode","synthetic":true,"types":[]},{"text":"impl Send for FuturesExecutor","synthetic":true,"types":[]},{"text":"impl Send for SmolExecutor","synthetic":true,"types":[]},{"text":"impl Send for AsyncStdExecutor","synthetic":true,"types":[]},{"text":"impl Send for WallTime","synthetic":true,"types":[]},{"text":"impl Send for ExternalProfiler","synthetic":true,"types":[]}];
implementors["criterion_plot"] = [{"text":"impl Send for Figure","synthetic":true,"types":[]},{"text":"impl Send for BoxWidth","synthetic":true,"types":[]},{"text":"impl Send for Font","synthetic":true,"types":[]},{"text":"impl Send for FontSize","synthetic":true,"types":[]},{"text":"impl Send for Key","synthetic":true,"types":[]},{"text":"impl Send for Label","synthetic":true,"types":[]},{"text":"impl Send for LineWidth","synthetic":true,"types":[]},{"text":"impl Send for Opacity","synthetic":true,"types":[]},{"text":"impl Send for Output","synthetic":true,"types":[]},{"text":"impl Send for PointSize","synthetic":true,"types":[]},{"text":"impl Send for Size","synthetic":true,"types":[]},{"text":"impl&lt;P, L&gt; Send for TicLabels&lt;P, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Title","synthetic":true,"types":[]},{"text":"impl Send for ScaleFactor","synthetic":true,"types":[]},{"text":"impl Send for Version","synthetic":true,"types":[]},{"text":"impl Send for Range","synthetic":true,"types":[]},{"text":"impl Send for Axes","synthetic":true,"types":[]},{"text":"impl Send for Axis","synthetic":true,"types":[]},{"text":"impl Send for Color","synthetic":true,"types":[]},{"text":"impl Send for Grid","synthetic":true,"types":[]},{"text":"impl Send for LineType","synthetic":true,"types":[]},{"text":"impl Send for PointType","synthetic":true,"types":[]},{"text":"impl Send for Scale","synthetic":true,"types":[]},{"text":"impl Send for Terminal","synthetic":true,"types":[]},{"text":"impl Send for VersionError","synthetic":true,"types":[]},{"text":"impl Send for Properties","synthetic":true,"types":[]},{"text":"impl Send for Properties","synthetic":true,"types":[]},{"text":"impl&lt;X, WM, BM, BH, WH&gt; Send for Candlesticks&lt;X, WM, BM, BH, WH&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BH: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;BM: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;WH: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;WM: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Properties","synthetic":true,"types":[]},{"text":"impl&lt;X, Y&gt; Send for Curve&lt;X, Y&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Y: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Properties","synthetic":true,"types":[]},{"text":"impl&lt;X, Y, L, H&gt; Send for ErrorBar&lt;X, Y, L, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Y: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Properties","synthetic":true,"types":[]},{"text":"impl&lt;X, Y1, Y2&gt; Send for FilledCurve&lt;X, Y1, Y2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Y1: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Y2: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Properties","synthetic":true,"types":[]},{"text":"impl Send for Properties","synthetic":true,"types":[]},{"text":"impl Send for Boxed","synthetic":true,"types":[]},{"text":"impl Send for Horizontal","synthetic":true,"types":[]},{"text":"impl Send for Justification","synthetic":true,"types":[]},{"text":"impl Send for Order","synthetic":true,"types":[]},{"text":"impl Send for Position","synthetic":true,"types":[]},{"text":"impl Send for Stacked","synthetic":true,"types":[]},{"text":"impl Send for Vertical","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()