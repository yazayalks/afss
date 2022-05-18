# timer.py
 
import time
 
class TimerError(Exception):
    """Пользовательское исключение, используемое для сообщения об ошибках при использовании класса Timer"""
 
 
class Timer:
 
    def __init__(self):
        self._start_time = None
 
 
    def start(self):
        """Запуск нового таймера"""
 
        if not (self._start_time is not None) :
            self._start_time = time.perf_counter()
            #raise TimerError(f"Таймер уже работает. Используйте .stop() чтобы его остановить")
            #print("Таймер уже работает. Используйте .stop() чтобы его остановить")
        #else :
            
 
 
    def stop(self):
        """Отстановить таймер и сообщить о времени вычисления"""
 
        if not (self._start_time is None) :
            #raise TimerError(f"Таймер не работает. Используйте .start() для его запуска")
            self._start_time = None
            #print("Таймер не работает. Используйте .start() для его запуска")
        #else :    
            
        
    def getTime(self) :
        elapsed_time = time.perf_counter() - self._start_time
        #print(f'Вычисление заняло {elapsed_time:0.4f} sec')
        sec = float('{:.4f}'.format(elapsed_time))
        #print('% 0.4f' % elapsed_time)
        #print(sec)
        return sec
        