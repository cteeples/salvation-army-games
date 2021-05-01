using UnityEngine.Audio;
using System;
using UnityEngine;

public class AudioMNGR : MonoBehaviour
{
    public Sound[] sounds;
    public string Music;
    // Start is called before the first frame update
    void Awake ()
    {
        foreach(Sound s in sounds)
        {
            s.source = gameObject.AddComponent<AudioSource>();
            s.source.clip = s.clip;

            s.source.volume = s.volume;
            s.source.pitch = s.pitch;
            s.source.loop = s.loop;
        }
    }

    void Start()
    {
        Play(Music);
    }

    public void Play(string name)
    {
        Sound s = Array.Find(sounds, sound => sound.name == name);
        if(s == null)
            return;
        s.source.Play();

    }
}
