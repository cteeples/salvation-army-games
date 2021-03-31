using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Clicker : MonoBehaviour
{

    private void Update()
    {
        if(Input.GetMouseButtonDown(0))
        {
            
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);

            /*if(Physics.Raycast(ray, out hit))
            {
                if (hit.collider != null)
                {
                    Rigidbody rb;

                    if(rb = hit.transform.GetComponent<Rigidbody>())
                    {
                        //kill and despawn enemy
                        PrintName(hit.transform.gameObject);
                    }
                }
            }*/

            RaycastHit2D hit = Physics2D.GetRayIntersection(ray);
            if(hit.collider != null)
            {
                Kill_Interface click = hit.collider.GetComponent<Kill_Interface>();
                if(click != null) click.onClickAction();
                Debug.Log("hit collider " + hit.collider.tag);
            }
        }
    }

    private void PrintName(GameObject clickedObject)
    {
        print(clickedObject.name);
    }
}
